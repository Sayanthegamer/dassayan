// Export the timetable data properly for use in renderer
// Export the updated timetable data for use in renderer
const timetable = {
  Sunday: [
    { time: "6:30 – 9:00 AM", subject: "📐 Maths Tuition", details: "", type: "maths" },
    { time: "9:15 – 9:30 AM", subject: "🍽️ Breakfast + Light Phone Check", details: "", type: "break" },
    { time: "9:30 – 11:30 AM", subject: "📐 Math Problem Solving", details: "", type: "maths" },
    { time: "11:30 – 12:00 PM", subject: "📱 Mobile Break / Stretch", details: "", type: "break" },
    { time: "12:00 – 1:30 PM", subject: "📝 English Revision", details: "", type: "english" },
    { time: "1:30 – 2:00 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:00 – 4:00 PM", subject: "📘 Physics Self-Study", details: "", type: "physics" },
    { time: "4:00 – 4:30 PM", subject: "📱 Short Mobile Break / Snack", details: "", type: "break" },
    { time: "5:00 – 6:30 PM", subject: "📘 Physics Tuition", details: "", type: "physics" },
    { time: "7:00 – 8:30 PM", subject: "🧪 Chemistry Self Study", details: "", type: "chemistry" },
    { time: "8:30 – 9:00 PM", subject: "🍽️ Dinner", details: "", type: "break" },
    { time: "9:00 – 11:00 PM", subject: "📐 Math Practice / Revision", details: "", type: "maths" },
    { time: "11:00 – 11:10 PM", subject: "📱 Wind Down / Light Phone Use", details: "", type: "break" }
  ],
  Monday: [
    { time: "7:00 – 9:00 AM", subject: "📘 Physics Self-Study", details: "", type: "physics" },
    { time: "9:00 – 9:30 AM", subject: "🍽️ Breakfast + Light Phone Check", details: "", type: "break" },
    { time: "9:30 – 11:30 AM", subject: "🧪 Chemistry Revision / Notes", details: "", type: "chemistry" },
    { time: "11:30 – 12:00 PM", subject: "📱 Mobile Break / Stretch", details: "", type: "break" },
    { time: "12:00 – 1:30 PM", subject: "💻 Computer Self Study", details: "", type: "computer" },
    { time: "1:30 – 2:00 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:00 – 4:00 PM", subject: "📐 Math Practice / Revision", details: "", type: "maths" },
    { time: "4:00 – 5:00 PM", subject: "📱 Snack / Short Phone Check", details: "", type: "break" },
    { time: "5:00 – 5:30 PM", subject: "🎸 Guitar?", details: "", type: "break" },
    { time: "5:00 – 8:00 PM", subject: "📖 Bengali Self Study", details: "", type: "bengali" },
    { time: "8:30 – 9:00 PM", subject: "🍽️ Dinner", details: "", type: "break" },
    { time: "9:00 – 11:00 PM", subject: "📐 Math Practice / Revision", details: "", type: "maths" },
    { time: "11:00 – 11:10 PM", subject: "📱 Wind Down / Light Phone Use", details: "", type: "break" }
  ],
  Tuesday: [
    { time: "7:00 – 8:30 AM", subject: "🧪 Chemistry Tuition", details: "", type: "chemistry" },
    { time: "8:50 – 9:30 AM", subject: "🍽️ Breakfast + Short Phone Check", details: "", type: "break" },
    { time: "9:30 – 11:30 AM", subject: "📐 Math Tuition", details: "", type: "maths" },
    { time: "11:30 – 1:30 PM", subject: "📐 Math Problem Solving", details: "", type: "maths" },
    { time: "1:30 – 2:00 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:00 – 4:30 PM", subject: "🧪 Chemistry Practice", details: "", type: "chemistry" },
    { time: "4:30 – 5:00 PM", subject: "📱 Snack / Light Phone Use", details: "", type: "break" },
    { time: "5:00 – 7:30 PM", subject: "📘 Physics Self Study", details: "", type: "physics" },
    { time: "7:30 – 9:00 PM", subject: "🍽️ Dinner + Relax", details: "", type: "break" },
    { time: "9:00 – 11:00 PM", subject: "📐 Math Practice / Revision", details: "", type: "maths" }
  ],
  Wednesday: [
    { time: "7:00 – 9:00 AM", subject: "📘 Physics Self Study", details: "", type: "physics" },
    { time: "9:00 – 9:30 AM", subject: "🍽️ Breakfast + Light Phone Check", details: "", type: "break" },
    { time: "9:30 – 11:30 AM", subject: "📐 Math Practice", details: "", type: "maths" },
    { time: "11:30 – 1:30 PM", subject: "🧪 Chemistry Revision", details: "", type: "chemistry" },
    { time: "1:30 – 2:00 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:00 – 5:30 PM", subject: "💻 Computer Revision", details: "", type: "computer" },
    { time: "5:30 – 6:30 PM", subject: "📱 Snack / Mobile Break", details: "", type: "break" },
    { time: "7:00 – 8:30 PM", subject: "💻 Computer Tuition", details: "", type: "computer" },
    { time: "8:30 – 9:00 PM", subject: "🍽️ Travel / Snack", details: "", type: "break" },
    { time: "9:00 – 11:00 PM", subject: "📐 Math Practice / Revision", details: "", type: "maths" }
  ],
  Thursday: [
    { time: "7:00 – 9:30 AM", subject: "🧪 Chemistry Self Study", details: "", type: "chemistry" },
    { time: "9:30 – 11:30 AM", subject: "📐 Math Tuition", details: "", type: "maths" },
    { time: "11:30 – 1:00 PM", subject: "📐 Math Practice / Notes", details: "", type: "maths" },
    { time: "1:00 – 2:00 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:30 – 5:30 PM", subject: "📘 Physics Self Study", details: "", type: "physics" },
    { time: "5:30 – 6:30 PM", subject: "📱 Snack / Short Phone Check", details: "", type: "break" },
    { time: "6:30 – 8:00 PM", subject: "📘 Physics Tuition", details: "", type: "physics" },
    { time: "8:00 – 8:30 PM", subject: "🍽️ Travel / Snack", details: "", type: "break" },
    { time: "9:00 – 11:00 PM", subject: "📐 Math Practice / Revision", details: "", type: "maths" }
  ],
  Friday: [
    { time: "7:00 – 9:30 AM", subject: "📘 Physics Self Study", details: "", type: "physics" },
    { time: "9:30 – 10:00 AM", subject: "🍽️ Breakfast + Light Phone Check", details: "", type: "break" },
    { time: "10:00 – 1:00 PM", subject: "📐 Math Practice / Problem Sets", details: "", type: "maths" },
    { time: "1:00 – 2:00 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:00 – 4:30 PM", subject: "🧪 Chemistry Revision", details: "", type: "chemistry" },
    { time: "4:30 – 5:00 PM", subject: "📱 Snack / Mobile Break", details: "", type: "break" },
    { time: "5:00 – 6:30 PM", subject: "📝 English Tuition", details: "", type: "english" },
    { time: "7:00 – 8:30 PM", subject: "💻 Computer Tuition", details: "", type: "computer" },
    { time: "8:30 – 9:00 PM", subject: "🍽️ Travel / Snack", details: "", type: "break" },
    { time: "9:00 – 11:00 PM", subject: "📐 Math Practice / Revision", details: "", type: "maths" }
  ],
  Saturday: [
    { time: "7:00 – 8:30 AM", subject: "🧪 Chemistry Tuition", details: "", type: "chemistry" },
    { time: "8:30 – 8:50 AM", subject: "🚗 Travel", details: "", type: "travel" },
    { time: "8:50 – 9:30 AM", subject: "🍽️ Breakfast + Light Phone Check", details: "", type: "break" },
    { time: "9:30 – 11:30 AM", subject: "📐 Math Tuition", details: "", type: "maths" },
    { time: "11:30 – 1:30 PM", subject: "📐 Math Self Study", details: "", type: "maths" },
    { time: "1:30 – 2:00 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:00 – 2:30 PM", subject: "📱 Short Phone Check", details: "", type: "break" },
    { time: "2:30 – 4:30 PM", subject: "📐 Math Tuition", details: "", type: "maths" },
    { time: "4:30 – 5:00 PM", subject: "🚗 Travel / Short Phone Check", details: "", type: "travel" },
    { time: "5:00 – 8:00 PM", subject: "📖 Bengali Revision", details: "", type: "bengali" },
    { time: "8:00 – 10:00 PM", subject: "📖 Bengali Tuition", details: "", type: "bengali" },
    { time: "10:10 – 11:00 PM", subject: "📱 Wind Down / Light Phone Use", details: "", type: "break" }
  ]
};


// Make it available globally for the renderer (browser)
if (typeof window !== 'undefined') {
  window.timetable = timetable;
}

// Support both browser and Node.js (preload) usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { timetable };
}
