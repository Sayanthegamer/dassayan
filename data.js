// Export the timetable data properly for use in renderer
const timetable = {
  Monday: [
    { time: "7:00 AM – 9:30 AM", subject: "📐 JEE Study – Maths", details: "Concept Review & Practice", type: "maths" },
    { time: "8:45 AM", subject: "🍽️ Breakfast", details: "During/after Maths session", type: "break" },
    { time: "9:30 AM – 11:30 AM", subject: "📖 Bengali Self-Study", details: "", type: "bengali" },
    { time: "11:30 AM – 1:15 PM", subject: "😌 Personal Time / Break", details: "", type: "break" },
    { time: "1:15 PM", subject: "🚿 Shower", details: "", type: "break" },
    { time: "1:45 PM – 2:15 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:45 PM – 5:30 PM", subject: "📘 JEE Study – Physics", details: "Concept Study & Problem Solving", type: "physics" },
    { time: "5:30 PM – 7:00 PM", subject: "🧘 Break / Relax", details: "", type: "break" },
    { time: "7:00 PM – 9:30 PM", subject: "🧪 JEE Study – Chemistry", details: "Organic/Inorganic Concept Study", type: "chemistry" },
    { time: "10:00 PM onwards", subject: "🍽️ Dinner & Wind down", details: "", type: "break" }
  ],
  Tuesday: [
    { time: "6:30 AM – 7:00 AM", subject: "🚗 Travel to Chemistry Tuition", details: "", type: "travel" },
    { time: "7:00 AM – 8:30 AM", subject: "🧪 Chemistry Tuition", details: "", type: "chemistry" },
    { time: "8:30 AM – 9:00 AM", subject: "🚗 Travel back home", details: "", type: "travel" },
    { time: "8:45 AM – 9:15 AM", subject: "🍽️ Breakfast", details: "", type: "break" },
    { time: "9:00 AM – 9:30 AM", subject: "🚗 Travel to Math Tuition", details: "", type: "travel" },
    { time: "9:30 AM – 11:30 AM", subject: "📐 Math Tuition", details: "", type: "maths" },
    { time: "11:30 AM – 12:00 PM", subject: "🚗 Travel back home", details: "", type: "travel" },
    { time: "12:00 PM – 1:15 PM", subject: "😌 Relax / Prepare for study", details: "", type: "break" },
    { time: "1:15 PM", subject: "🚿 Shower", details: "", type: "break" },
    { time: "1:45 PM – 2:15 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:15 PM – 5:30 PM", subject: "📐 JEE Study – Maths", details: "Tuition Review & Problem Solving", type: "maths" },
    { time: "5:30 PM – 7:00 PM", subject: "🧘 Break / Personal Time", details: "", type: "break" },
    { time: "7:00 PM – 9:30 PM", subject: "📘 JEE Study – Physics", details: "Problem Solving & Revision", type: "physics" },
    { time: "10:00 PM onwards", subject: "🍽️ Dinner & Rest", details: "", type: "break" }
  ],
  Wednesday: [
    { time: "7:00 AM – 9:30 AM", subject: "📘 JEE Study – Physics", details: "Theory & Foundation Building", type: "physics" },
    { time: "8:45 AM", subject: "🍽️ Breakfast", details: "During/after Physics session", type: "break" },
    { time: "9:30 AM – 1:15 PM", subject: "😌 Personal Time / Break", details: "", type: "break" },
    { time: "1:15 PM", subject: "🚿 Shower", details: "", type: "break" },
    { time: "1:45 PM – 2:15 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:45 PM – 5:30 PM", subject: "🧪 JEE Study – Chemistry", details: "Physical Chemistry Numerical Practice", type: "chemistry" },
    { time: "5:30 PM – 7:00 PM", subject: "🧘 Break / Relax", details: "", type: "break" },
    { time: "7:00 PM – 9:30 PM", subject: "📐 JEE Study – Maths", details: "Concept Study & Diverse Problem Solving", type: "maths" },
    { time: "10:00 PM onwards", subject: "🍽️ Dinner & Wind down", details: "", type: "break" }
  ],
  Thursday: [
    { time: "9:00 AM – 9:30 AM", subject: "🚗 Travel to Math Tuition", details: "", type: "travel" },
    { time: "9:30 AM – 11:30 AM", subject: "📐 Math Tuition", details: "", type: "maths" },
    { time: "11:30 AM – 12:00 PM", subject: "🚗 Travel back home", details: "", type: "travel" },
    { time: "12:00 PM – 1:15 PM", subject: "🧘 Review / Relax", details: "", type: "break" },
    { time: "1:15 PM", subject: "🚿 Shower", details: "", type: "break" },
    { time: "1:45 PM – 2:15 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:15 PM – 5:30 PM", subject: "🧪 JEE Study – Chemistry", details: "Tuition Review & Problem Solving", type: "chemistry" },
    { time: "5:30 PM – 6:00 PM", subject: "🚗 Travel to Physics Tuition", details: "", type: "travel" },
    { time: "6:00 PM – 8:00 PM", subject: "📘 Physics Tuition", details: "", type: "physics" },
    { time: "8:00 PM – 8:30 PM", subject: "🚗 Travel back home", details: "", type: "travel" },
    { time: "8:30 PM – 9:30 PM", subject: "🧘 Break / Quick Dinner", details: "", type: "break" },
    { time: "9:30 PM – 11:00 PM", subject: "📘 JEE Study – Physics", details: "Post-Tuition Practice", type: "physics" },
    { time: "10:00 PM", subject: "🍽️ Dinner (if not eaten earlier)", details: "", type: "break" }
  ],
  Friday: [
    { time: "7:00 AM – 9:30 AM", subject: "🧪 JEE Study – Chemistry", details: "Concept Review & Problem Solving", type: "chemistry" },
    { time: "8:45 AM", subject: "🍽️ Breakfast", details: "During/after Chemistry session", type: "break" },
    { time: "9:30 AM – 1:15 PM", subject: "😌 Personal Time / Break", details: "", type: "break" },
    { time: "1:15 PM", subject: "🚿 Shower", details: "", type: "break" },
    { time: "1:45 PM – 2:15 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:45 PM – 5:00 PM", subject: "📘 JEE Study – Physics", details: "Concept Study & Derivations", type: "physics" },
    { time: "5:00 PM – 5:30 PM", subject: "🚗 Travel to English Tuition", details: "", type: "travel" },
    { time: "5:30 PM – 7:30 PM", subject: "📝 English Tuition", details: "", type: "english" },
    { time: "7:30 PM – 8:00 PM", subject: "🚗 Travel back home", details: "", type: "travel" },
    { time: "8:00 PM – 9:30 PM", subject: "🧘 Break / Relax", details: "", type: "break" },
    { time: "9:30 PM – 11:30 PM", subject: "📝 English Review & Practice", details: "", type: "english" },
    { time: "10:00 PM", subject: "🍽️ Dinner", details: "", type: "break" }
  ],
  Saturday: [
    { time: "6:30 AM – 7:00 AM", subject: "🚗 Travel to Chemistry Tuition", details: "", type: "travel" },
    { time: "7:00 AM – 8:30 AM", subject: "🧪 Chemistry Tuition", details: "", type: "chemistry" },
    { time: "8:30 AM – 9:00 AM", subject: "🚗 Travel back home", details: "", type: "travel" },
    { time: "8:45 AM – 9:15 AM", subject: "🍽️ Breakfast", details: "", type: "break" },
    { time: "9:00 AM – 9:30 AM", subject: "🚗 Travel to Math Tuition", details: "", type: "travel" },
    { time: "9:30 AM – 11:30 AM", subject: "📐 Math Tuition", details: "", type: "maths" },
    { time: "11:30 AM – 12:00 PM", subject: "🚗 Travel back home", details: "", type: "travel" },
    { time: "12:00 PM – 1:45 PM", subject: "😌 Short Break / Review", details: "", type: "break" },
    { time: "1:45 PM – 2:15 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:15 PM – 2:30 PM", subject: "🚗 Travel to Math Tuition", details: "", type: "travel" },
    { time: "2:30 PM – 4:30 PM", subject: "📐 Math Tuition", details: "", type: "maths" },
    { time: "4:30 PM – 5:00 PM", subject: "🚗 Travel back home", details: "", type: "travel" },
    { time: "5:00 PM – 7:40 PM", subject: "📐 JEE Study – Maths", details: "Advanced Problem Solving", type: "maths" },
    { time: "7:40 PM – 8:00 PM", subject: "🚗 Travel to Bengali Tuition", details: "", type: "travel" },
    { time: "8:00 PM – 10:00 PM", subject: "📖 Bengali Tuition", details: "", type: "bengali" },
    { time: "10:00 PM – 10:30 PM", subject: "🚗 Travel back home", details: "", type: "travel" },
    { time: "10:00 PM onwards", subject: "🍽️ Dinner (late)", details: "", type: "break" }
  ],
  Sunday: [
    { time: "6:00 AM – 6:30 AM", subject: "🚗 Travel to Math Tuition", details: "", type: "travel" },
    { time: "6:30 AM – 8:30 AM", subject: "📐 Math Tuition", details: "", type: "maths" },
    { time: "8:30 AM – 9:00 AM", subject: "🚗 Travel back home", details: "", type: "travel" },
    { time: "8:45 AM – 9:15 AM", subject: "🍽️ Breakfast", details: "", type: "break" },
    { time: "9:30 AM – 1:00 PM", subject: "🧪 JEE Study – Chemistry", details: "Revision & Mixed Problem Solving", type: "chemistry" },
    { time: "1:15 PM", subject: "🚿 Shower", details: "", type: "break" },
    { time: "1:45 PM – 2:15 PM", subject: "🍽️ Lunch", details: "", type: "break" },
    { time: "2:15 PM – 4:30 PM", subject: "📘 JEE Study – Physics", details: "Topic-Specific Problem Solving", type: "physics" },
    { time: "4:30 PM – 5:00 PM", subject: "🚗 Travel to Physics Tuition", details: "", type: "travel" },
    { time: "5:00 PM – 7:00 PM", subject: "📘 Physics Tuition", details: "", type: "physics" },
    { time: "7:00 PM – 7:30 PM", subject: "🚗 Travel back home", details: "", type: "travel" },
    { time: "7:30 PM – 9:30 PM", subject: "😌 Break / Relax / Prepare for the week", details: "", type: "break" },
    { time: "9:30 PM onwards", subject: "🍽️ Dinner & Wind down", details: "", type: "break" }
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