// Track if the user has interacted with the page (for sound autoplay)
let userHasInteracted = false;
window.addEventListener('click', () => { userHasInteracted = true; }, { once: true });
window.addEventListener('keydown', () => { userHasInteracted = true; }, { once: true });
// Week Progress Ring Logic
document.addEventListener('DOMContentLoaded', () => {
  const circle = document.getElementById('week-progress-circle');
  const progressEl = document.getElementById('progress-percent');
  const weekProgress = 38; // Set to 38% as per description
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  if (circle && progressEl) {
    circle.setAttribute('stroke-dasharray', circumference);
    const offset = circumference * (1 - weekProgress / 100); // 38% filled
    circle.style.strokeDashoffset = offset;
    progressEl.textContent = weekProgress;
  }
});
// File renamed to renderer.js. This file is now obsolete.


const scheduleContainer = document.getElementById('schedule-container');
const liveBanner = document.getElementById('live-now');
let currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
let currentView = 'timeline'; // Track the current view ('timeline' or 'grid')

// Store theme preference in memory instead of localStorage
let currentTheme = 'light';

// Track which tasks have already played the complete sound
const completedSoundPlayed = new Set();

function switchDay(day) {
  console.log('Switching to day:', day); // Debug log
  currentDay = day;
  
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const isManual = day !== today;
  
  renderSchedule(day, isManual);
  
  document.querySelectorAll('.day-selector button').forEach(btn => {
    btn.classList.remove('active');
    const dayNameSpan = btn.querySelector('.day-name');
    if (dayNameSpan && dayNameSpan.textContent.trim() === day) {
      btn.classList.add('active');
    }
  });
}

function renderSchedule(day, isManual = false) {
  console.log(`Rendering schedule for: ${day} in ${currentView} view. Manual: ${isManual}`); // Debug log
  
  scheduleContainer.style.opacity = '0.7';
  scheduleContainer.style.transform = 'translateY(10px)';
  
  setTimeout(() => {
    scheduleContainer.innerHTML = '';
    // Set class based on the current view
    scheduleContainer.className = `schedule-${currentView}`;

    if (!window.timetable) {
      scheduleContainer.innerHTML = '<div class="loading-card">Loading schedule data...</div>';
      return;
    }
    const daySchedule = window.timetable[day];
    if (!daySchedule || daySchedule.length === 0) {
      scheduleContainer.innerHTML = '<div class="error-card">No schedule available for this day.</div>';
      return;
    }

    const now = new Date();
    let liveTask = null;
    let completedTasks = 0;


    daySchedule.forEach((entry, index) => {
      const [start, end] = parseTimeRange(entry.time, now);
      const isCurrent = !isManual && start && end && now >= start && now <= end;
      const isPast = !isManual && end && now > end;

      const card = document.createElement('div');
      card.className = `schedule-card ${entry.type}` + (isCurrent ? ' highlight' : '') + (isPast ? ' completed' : '');
      card.style.animationDelay = `${index * 0.05}s`; // Faster animation for grid

      const header = document.createElement('div');
      header.className = 'card-header';
      header.innerHTML = `<span class="subject">${entry.subject}</span><span class="time">${entry.time}</span>`;

      const details = document.createElement('div');
      details.className = 'details';
      details.textContent = entry.details;

      // Use a unique key for each task (subject + time)
      const taskKey = `${entry.subject}|${entry.time}`;

      if (isPast) {
        const checkmark = document.createElement('div');
        checkmark.className = 'completion-badge';
        checkmark.innerHTML = '✓';
        card.appendChild(checkmark);
        completedTasks++;
        // Play sound only if not already played for this task
        if (!completedSoundPlayed.has(taskKey) && userHasInteracted) {
          soundManager.play('complete');
          completedSoundPlayed.add(taskKey);
        }
      }

      card.appendChild(header);
      if (entry.details) card.appendChild(details);
      scheduleContainer.appendChild(card);
      if (isCurrent) liveTask = entry.subject;
    });




    updateLiveBanner(isManual, liveTask);
    updateStats(day, daySchedule, completedTasks, liveTask);
    setTimeout(() => {
      scheduleContainer.style.opacity = '1';
      scheduleContainer.style.transform = 'translateY(0)';
    }, 100);
  }, 150);
}


function updateStats(day, daySchedule, completedTasks, liveTask) {
  const totalTasks = daySchedule.length;
  const studyTasks = daySchedule.filter(task => 
    ['maths', 'physics', 'chemistry', 'english', 'bengali', 'computer'].includes(task.type)
  );
  
  let totalStudyHours = 0;
  studyTasks.forEach(task => {
    const [start, end] = parseTimeRange(task.time, new Date());
    if (start && end) {
      totalStudyHours += (end - start) / (1000 * 60 * 60);
    }
  });

  document.getElementById('total-tasks').textContent = totalTasks;
  document.getElementById('study-hours').textContent = Math.round(totalStudyHours) + 'h';
  document.getElementById('completed-tasks').textContent = completedTasks;
  document.getElementById('current-subject').textContent = liveTask ? 
    liveTask.replace(/�|📘|🧪|�|📖|🍽️|🚿|😌|🧘|🚗|💻|🎸/g, '').trim().substring(0, 8) + '...' : '—';
}

function updateLiveBanner(isManual, liveTask) {
  if (!isManual) {
    liveBanner.innerHTML = liveTask ? `Live Now: ${liveTask}` : 'Live Now: —';
  } else {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const todaySchedule = window.timetable[today] || [];
    const now = new Date();
    let todayLiveTask = null;

    for (let entry of todaySchedule) {
      const [start, end] = parseTimeRange(entry.time, now);
      if (start && end && now >= start && now <= end) {
        todayLiveTask = entry.subject;
        break;
      }
    }
    
    liveBanner.innerHTML = todayLiveTask ? `Live Now: ${todayLiveTask}` : 'Live Now: —';
  }
}

function parseTimeRange(timeStr, baseDate) {
  if (timeStr.includes('onwards')) return [null, null];

  // Try to match both times, allowing the first to be missing AM/PM
  const rangeMatch = timeStr.match(/(\d{1,2}:\d{2})(?:\s*([APM]{2}))?\s*[–-]\s*(\d{1,2}:\d{2})\s*([APM]{2})/i);
  if (rangeMatch) {
    let [, startTime, startPeriod, endTime, endPeriod] = rangeMatch;
    // If startPeriod is missing, try to infer it
    if (!startPeriod) {
      const [startHour, startMin] = startTime.split(':').map(Number);
      const [endHour, endMin] = endTime.split(':').map(Number);
      if (endPeriod === 'PM') {
        if (startHour === 12) {
          // 12:00 – X PM => 12:00 PM
          startPeriod = 'PM';
        } else if (startHour > endHour) {
          // e.g. 11:30 – 1:30 PM => 11:30 AM – 1:30 PM
          startPeriod = 'AM';
        } else {
          // e.g. 2:00 – 4:30 PM => 2:00 PM – 4:30 PM
          startPeriod = 'PM';
        }
      } else if (endPeriod === 'AM') {
        if (startHour === 12) {
          // 12:00 – X AM => 12:00 AM
          startPeriod = 'AM';
        } else if (startHour > endHour) {
          // e.g. 11:30 – 1:30 AM => 11:30 PM – 1:30 AM (overnight)
          startPeriod = 'PM';
        } else {
          // e.g. 6:00 – 8:00 AM => 6:00 AM – 8:00 AM
          startPeriod = 'AM';
        }
      } else {
        startPeriod = endPeriod;
      }
    }
    const start = parseTimeString(startTime + ' ' + startPeriod, baseDate);
    const end = parseTimeString(endTime + ' ' + endPeriod, baseDate);
    return [start, end];
  }

  // Single time (point event)
  const singleMatch = timeStr.match(/(\d{1,2}:\d{2})\s*([APM]{2})/i);
  if (singleMatch) {
    const timePoint = parseTimeString(singleMatch[1] + ' ' + singleMatch[2], baseDate);
    return [timePoint, new Date(timePoint.getTime() + 30 * 60000)];
  }
  return [null, null];
}

function parseTimeString(timeStr, baseDate) {
  // Accepts "h:mm AM/PM" or "h:mmAM/PM"
  const match = timeStr.match(/(\d{1,2}):(\d{2})\s*([APM]{2})/i);
  if (!match) return null;
  let [, h, m, period] = match;
  h = Number(h);
  m = Number(m);
  if (period.toUpperCase() === 'PM' && h !== 12) h += 12;
  if (period.toUpperCase() === 'AM' && h === 12) h = 0;
  const date = new Date(baseDate);
  date.setHours(h, m, 0, 0);
  return date;
}

function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  currentTheme = 'light';
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    if (userHasInteracted) {
      soundManager.play('theme'); // Play a new sound for theme switch
    }
    console.log('Theme switched to:', currentTheme);
  });
}

function initDaySelector() {
  const buttons = document.querySelectorAll('.day-selector button');
  buttons.forEach(btn => {
    const dayNameSpan = btn.querySelector('.day-name');
    if (dayNameSpan && dayNameSpan.textContent.trim() === currentDay) {
      btn.classList.add('active');
    }
    btn.addEventListener('click', function() {
      if (userHasInteracted) {
        if (userHasInteracted) {
          soundManager.play('click');
        }
      }
      const dayNameSpan = this.querySelector('.day-name');
      if (dayNameSpan) {
        switchDay(dayNameSpan.textContent.trim());
      }
    });
    // Add hover sound
    btn.addEventListener('mouseenter', () => {
      if (userHasInteracted) {
        soundManager.play('hover');
      }
    });
  });
}

function startLiveUpdates() {
  setInterval(() => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    // Re-render only if we are on the current day to update live status
    const isViewingToday = currentDay === today;
    if (isViewingToday) {
      renderSchedule(currentDay, false);
    } else {
      // If viewing another day, just update the live banner for today
      updateLiveBanner(true, null);
    }
    // Update week progress every minute as well
    updateWeekProgress();
  }, 60000);
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing...');
  initCurrentDate();
  setTimeout(() => {
    console.log('Timetable available:', !!window.timetable);
    initThemeToggle();
    initDaySelector();
    initViewOptions(); // Initialize view switching
    renderSchedule(currentDay);
    startLiveUpdates();
    updateWeekProgress();
  }, 100);
});

function initCurrentDate() {
  const currentDateEl = document.getElementById('current-date');
  if (currentDateEl) {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateEl.textContent = now.toLocaleDateString('en-US', options);
  }
}

function initViewOptions() {
  const viewButtons = document.querySelectorAll('.view-btn');
  viewButtons.forEach(button => {
    button.addEventListener('click', () => {
      const view = button.dataset.view;
      if (view !== currentView) {
        if (userHasInteracted) {
          soundManager.play('click');
        }
        currentView = view;
        // Update active button
        viewButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // **FIX**: Check if the currently viewed day is today.
        // Render with isManual=false if it's today, so completed tasks show up.
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        const isViewingToday = currentDay === today;
        renderSchedule(currentDay, !isViewingToday);
      }
    });
  });
}

function updateWeekProgress() {
  const now = new Date();
  let dayOfWeek = (now.getDay() + 6) % 7; // Monday=0, Sunday=6
  const hour = now.getHours();
  const minute = now.getMinutes();
  const dayProgress = (hour * 60 + minute) / (24 * 60); // Progress through the current day
  let weekProgress = Math.round(((dayOfWeek + dayProgress) / 7) * 100); // Total week progress
  weekProgress = Math.max(0, Math.min(weekProgress, 100)); // Clamp between 0 and 100

  const progressEl = document.getElementById('progress-percent');
  const circle = document.getElementById('week-progress-circle');

  if (progressEl) {
    progressEl.textContent = weekProgress; // Update percentage text
  }

  if (circle) {
    const radius = 45; // Updated radius to match new HTML
    const circumference = 2 * Math.PI * radius; // ~282.7
    circle.setAttribute('stroke-dasharray', circumference);
    const offset = circumference * (1 - weekProgress / 100); // Calculate offset
    circle.style.strokeDashoffset = offset; // Apply offset
  }

  console.log(`Week progress: ${weekProgress}%`);
}

window.switchDay = switchDay;

// Sound Effects Manager
class SoundManager {
  constructor() {
    this.sounds = {
      click: document.getElementById('click-sound'),
      hover: document.getElementById('hover-sound'),
      complete: document.getElementById('complete-sound'),
      notification: document.getElementById('notification-sound'),
      theme: document.getElementById('theme-sound')
    };
    this.enabled = true;
    this.volume = 0.6;
    this.init();
  }

  init() {
    // Set volume for all sounds
    Object.values(this.sounds).forEach(sound => {
      if (sound) {
        sound.volume = this.volume;
      }
    });
  }

  play(soundName) {
    if (!userHasInteracted) {
      console.log(`[SoundManager] Blocked sound before user interaction: ${soundName}`);
      return;
    }
    if (!this.enabled) {
      console.log(`[SoundManager] Sound disabled, not playing: ${soundName}`);
      return;
    }
    if (!this.sounds[soundName]) {
      console.log(`[SoundManager] Sound not found: ${soundName}`);
      return;
    }
    try {
      this.sounds[soundName].currentTime = 0;
      const playPromise = this.sounds[soundName].play();
      if (playPromise && playPromise.catch) {
        playPromise.catch(e => {
          console.log('[SoundManager] Sound autoplay prevented:', e);
        });
      } else {
        console.log(`[SoundManager] Playing sound: ${soundName}`);
      }
    } catch (e) {
      console.log('[SoundManager] Sound play error:', e);
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    Object.values(this.sounds).forEach(sound => {
      if (sound) sound.volume = this.volume;
    });
  }
}

// Initialize sound manager
const soundManager = new SoundManager();

// Initialize sound toggle
const soundToggleBtn = document.getElementById('sound-toggle-btn');
if (soundToggleBtn) {
  soundToggleBtn.classList.toggle('muted', !soundManager.enabled);
  soundToggleBtn.addEventListener('click', () => {
    const enabled = soundManager.toggle();
    soundToggleBtn.classList.toggle('muted', !enabled);
    if (userHasInteracted) {
      soundManager.play('click');
    }
  });
}
