NotoByte Android Back Button Update

1. Replace your existing app.js with the included app.js.
2. The existing notes.js, syllabus.js, quiz.js and questions.js do not need changes for this Back-button implementation.
3. This implementation uses the Capacitor App plugin through window.Capacitor.Plugins.App.
4. If the App plugin is not already installed in your project, run:
   npm install @capacitor/app
   npx cap sync android
5. Rebuild/run the Android app.

Behavior:
- Notes: Resources -> Subject -> Category -> Semester -> Year -> Branch -> Home -> Exit
- Syllabus: Subjects -> Semester -> Branch/Program -> Home -> Exit
- Quiz: Result -> Quiz -> Previous Question -> Subject -> Dashboard -> Home -> Exit
- At Home, Android Back exits the app.
