import quizquest from "@/assets/screenshots/quizquest.jpg";
import cvcraft1 from "@/assets/screenshots/cvcraft1.jpg";
import cvcraft2 from "@/assets/screenshots/cvcraft2.jpg";
import transcriptai1 from "@/assets/screenshots/transcriptai1.jpg";
import transcriptai2 from "@/assets/screenshots/transcriptai2.jpg";
import pptreuniones from "@/assets/screenshots/pptreuniones.jpg";
import ruta1 from "@/assets/screenshots/rutasanjosemaria1.jpg";
import ruta2 from "@/assets/screenshots/rutasanjosemaria2.jpg";
import ruta3 from "@/assets/screenshots/rutasanjosemaria3.jpg";
import ruta4 from "@/assets/screenshots/rutasanjosemaria4.jpg";

export type ProjectType = "frontend" | "backend" | "fullstack";

export interface Project {
  id: string;
  title: string;
  description: Record<string, string>;
  type: ProjectType;
  technologies: string[];
  github?: string;
  vercel?: string;
  railway?: string;
  highlights?: Record<string, string[]>;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "quizquest",
    title: "QuizQuest",
    description: {
      en: "A gamified quiz platform where users can test their knowledge across various topics. Features authentication, score tracking, and a sleek dark UI.",
      es: "Una plataforma de quizzes gamificada donde los usuarios pueden poner a prueba sus conocimientos. Incluye autenticación, seguimiento de puntuaciones y una interfaz oscura elegante.",
      de: "Eine gamifizierte Quiz-Plattform, auf der Benutzer ihr Wissen testen können. Mit Authentifizierung, Punktverfolgung und elegantem dunklem UI.",
      fr: "Une plateforme de quiz gamifiée où les utilisateurs peuvent tester leurs connaissances. Avec authentification, suivi des scores et une interface sombre élégante.",
      it: "Una piattaforma quiz gamificata dove gli utenti possono testare le proprie conoscenze. Con autenticazione, tracciamento punteggi e un'interfaccia scura elegante.",
      zh: "一个游戏化的测验平台，用户可以测试各种主题的知识。具有身份验证、分数跟踪和精美的深色界面。",
      ar: "منصة اختبارات تفاعلية حيث يمكن للمستخدمين اختبار معرفتهم. تتضمن المصادقة وتتبع النتائج وواجهة داكنة أنيقة.",
      ru: "Геймифицированная платформа викторин, где пользователи могут проверить свои знания. С аутентификацией, отслеживанием очков и стильным тёмным интерфейсом.",
      el: "Μια gamified πλατφόρμα κουίζ όπου οι χρήστες μπορούν να δοκιμάσουν τις γνώσεις τους. Με αυθεντικοποίηση, παρακολούθηση σκορ και κομψό σκοτεινό UI.",
    },
    type: "fullstack",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vite"],
    github: "https://github.com/jonpecina/quizquest",
    vercel: "https://quizquest.vercel.app",
    highlights: {
      en: ["Real-time score tracking", "Multiple quiz categories", "User authentication with Supabase", "Responsive dark theme"],
      es: ["Seguimiento de puntuación en tiempo real", "Múltiples categorías de quizzes", "Autenticación con Supabase", "Tema oscuro responsivo"],
      de: ["Echtzeit-Punkteverfolgung", "Mehrere Quiz-Kategorien", "Benutzerauthentifizierung mit Supabase", "Responsives dunkles Design"],
      fr: ["Suivi des scores en temps réel", "Catégories de quiz multiples", "Authentification avec Supabase", "Thème sombre responsive"],
      it: ["Tracciamento punteggio in tempo reale", "Categorie quiz multiple", "Autenticazione con Supabase", "Tema scuro responsive"],
      zh: ["实时分数跟踪", "多个测验类别", "Supabase 用户认证", "响应式深色主题"],
      ar: ["تتبع النتائج في الوقت الحقيقي", "فئات اختبار متعددة", "مصادقة المستخدم مع Supabase", "سمة داكنة متجاوبة"],
      ru: ["Отслеживание очков в реальном времени", "Множество категорий викторин", "Аутентификация через Supabase", "Адаптивная тёмная тема"],
      el: ["Παρακολούθηση σκορ σε πραγματικό χρόνο", "Πολλές κατηγορίες κουίζ", "Αυθεντικοποίηση με Supabase", "Responsive σκοτεινό θέμα"],
    },
    screenshots: [quizquest],
  },
  {
    id: "cvcraft",
    title: "CVCraft",
    description: {
      en: "A professional CV/resume generator with multiple templates, real-time preview, and export to PDF/DOCX. Supports multiple languages and template styles.",
      es: "Un generador profesional de CV con múltiples plantillas, vista previa en tiempo real y exportación a PDF/DOCX. Soporta múltiples idiomas y estilos.",
      de: "Ein professioneller Lebenslauf-Generator mit mehreren Vorlagen, Echtzeit-Vorschau und Export nach PDF/DOCX.",
      fr: "Un générateur de CV professionnel avec plusieurs modèles, aperçu en temps réel et export PDF/DOCX.",
      it: "Un generatore di CV professionale con modelli multipli, anteprima in tempo reale ed esportazione PDF/DOCX.",
      zh: "一个专业的简历生成器，支持多个模板、实时预览和PDF/DOCX导出。",
      ar: "مولد سيرة ذاتية احترافي مع قوالب متعددة ومعاينة في الوقت الحقيقي وتصدير إلى PDF/DOCX.",
      ru: "Профессиональный генератор резюме с несколькими шаблонами, предварительным просмотром и экспортом в PDF/DOCX.",
      el: "Επαγγελματικός δημιουργός βιογραφικού με πολλαπλά πρότυπα, προεπισκόπηση σε πραγματικό χρόνο και εξαγωγή σε PDF/DOCX.",
    },
    type: "frontend",
    technologies: ["React", "TypeScript", "Tailwind CSS", "PDF Generation", "Vite"],
    github: "https://github.com/jonpecina/cvcraft",
    railway: "https://cvcraft.railway.app",
    highlights: {
      en: ["Multiple CV templates", "Real-time preview", "PDF & DOCX export", "Multi-language support"],
      es: ["Múltiples plantillas de CV", "Vista previa en tiempo real", "Exportación PDF y DOCX", "Soporte multiidioma"],
      de: ["Mehrere CV-Vorlagen", "Echtzeit-Vorschau", "PDF- und DOCX-Export", "Mehrsprachige Unterstützung"],
      fr: ["Plusieurs modèles de CV", "Aperçu en temps réel", "Export PDF et DOCX", "Support multilingue"],
      it: ["Modelli CV multipli", "Anteprima in tempo reale", "Esportazione PDF e DOCX", "Supporto multilingua"],
      zh: ["多个简历模板", "实时预览", "PDF和DOCX导出", "多语言支持"],
      ar: ["قوالب سيرة ذاتية متعددة", "معاينة في الوقت الحقيقي", "تصدير PDF و DOCX", "دعم متعدد اللغات"],
      ru: ["Несколько шаблонов CV", "Предпросмотр в реальном времени", "Экспорт в PDF и DOCX", "Многоязычная поддержка"],
      el: ["Πολλαπλά πρότυπα CV", "Προεπισκόπηση σε πραγματικό χρόνο", "Εξαγωγή PDF & DOCX", "Πολυγλωσσική υποστήριξη"],
    },
    screenshots: [cvcraft1, cvcraft2],
  },
  {
    id: "transcriptai",
    title: "TranscriptAI",
    description: {
      en: "An AI-powered platform that transforms meeting transcripts into professional presentations with auto-generated slides. Powered by Gemini 3 Pro.",
      es: "Una plataforma impulsada por IA que transforma transcripciones de reuniones en presentaciones profesionales con diapositivas generadas automáticamente.",
      de: "Eine KI-gestützte Plattform, die Meeting-Transkripte in professionelle Präsentationen mit automatisch generierten Folien umwandelt.",
      fr: "Une plateforme alimentée par l'IA qui transforme les transcriptions de réunions en présentations professionnelles.",
      it: "Una piattaforma alimentata dall'IA che trasforma le trascrizioni delle riunioni in presentazioni professionali.",
      zh: "一个AI驱动的平台，将会议记录转换为具有自动生成幻灯片的专业演示文稿。",
      ar: "منصة مدعومة بالذكاء الاصطناعي تحول نصوص الاجتماعات إلى عروض تقديمية احترافية.",
      ru: "Платформа на базе ИИ, которая превращает стенограммы встреч в профессиональные презентации.",
      el: "Μια πλατφόρμα με τεχνητή νοημοσύνη που μετατρέπει τα πρακτικά συναντήσεων σε επαγγελματικές παρουσιάσεις.",
    },
    type: "fullstack",
    technologies: ["React", "TypeScript", "Supabase", "Gemini API", "Tailwind CSS", "Vite"],
    github: "https://github.com/jonpecina/transcriptai",
    vercel: "https://transcriptai.vercel.app",
    highlights: {
      en: ["AI-generated slides from transcripts", "Multiple presentation styles", "Project management dashboard", "Powered by Gemini 3 Pro"],
      es: ["Diapositivas generadas por IA", "Múltiples estilos de presentación", "Panel de gestión de proyectos", "Impulsado por Gemini 3 Pro"],
      de: ["KI-generierte Folien aus Transkripten", "Mehrere Präsentationsstile", "Projektmanagement-Dashboard", "Powered by Gemini 3 Pro"],
      fr: ["Diapositives générées par IA", "Styles de présentation multiples", "Tableau de bord de gestion de projet", "Propulsé par Gemini 3 Pro"],
      it: ["Diapositive generate dall'IA", "Stili di presentazione multipli", "Dashboard di gestione progetti", "Powered by Gemini 3 Pro"],
      zh: ["AI从转录中生成幻灯片", "多种演示风格", "项目管理仪表板", "由Gemini 3 Pro驱动"],
      ar: ["شرائح مولدة بالذكاء الاصطناعي", "أنماط عرض متعددة", "لوحة إدارة المشاريع", "مدعوم بـ Gemini 3 Pro"],
      ru: ["Слайды, сгенерированные ИИ", "Несколько стилей презентаций", "Панель управления проектами", "На базе Gemini 3 Pro"],
      el: ["Slides δημιουργημένα από AI", "Πολλαπλά στυλ παρουσίασης", "Dashboard διαχείρισης έργων", "Powered by Gemini 3 Pro"],
    },
    screenshots: [transcriptai1, transcriptai2, pptreuniones],
  },
  {
    id: "ruta-san-josemaria",
    title: "Ruta San Josemaría",
    description: {
      en: "An interactive historical tour app of Logroño (1915-1925) featuring an interactive map, photo album, and trivia game about San Josemaría Escrivá's youth.",
      es: "Una aplicación interactiva de recorrido histórico por Logroño (1915-1925) con mapa interactivo, álbum fotográfico y trivial sobre la juventud de San Josemaría.",
      de: "Eine interaktive historische Tour-App durch Logroño (1915-1925) mit interaktiver Karte, Fotoalbum und Trivia-Spiel.",
      fr: "Une application de visite historique interactive de Logroño (1915-1925) avec carte interactive, album photo et jeu de trivia.",
      it: "Un'app di tour storico interattivo di Logroño (1915-1925) con mappa interattiva, album fotografico e gioco a quiz.",
      zh: "洛格罗尼奥（1915-1925）互动历史游览应用，包含互动地图、相册和知识问答游戏。",
      ar: "تطبيق جولة تاريخية تفاعلية في لوغرونيو (1915-1925) مع خريطة تفاعلية وألبوم صور ولعبة معلومات.",
      ru: "Интерактивное историческое приложение по Логроньо (1915-1925) с интерактивной картой, фотоальбомом и викториной.",
      el: "Μια διαδραστική ιστορική εφαρμογή περιήγησης στο Λογκρόνιο (1915-1925) με διαδραστικό χάρτη, φωτογραφικό άλμπουμ και κουίζ.",
    },
    type: "fullstack",
    technologies: ["React", "TypeScript", "Leaflet", "Supabase", "Tailwind CSS", "Vite"],
    github: "https://github.com/jonpecina/ruta-san-josemaria",
    vercel: "https://ruta-san-josemaria.vercel.app",
    highlights: {
      en: ["Interactive Leaflet map with points of interest", "Historical photo album with 30+ images", "Trivia game with score tracking", "Light/dark mode support"],
      es: ["Mapa interactivo Leaflet con puntos de interés", "Álbum fotográfico histórico con 30+ imágenes", "Juego de trivial con seguimiento de puntuación", "Modo claro/oscuro"],
      de: ["Interaktive Leaflet-Karte mit Sehenswürdigkeiten", "Historisches Fotoalbum mit 30+ Bildern", "Trivia-Spiel mit Punkteverfolgung", "Hell/Dunkel-Modus"],
      fr: ["Carte Leaflet interactive avec points d'intérêt", "Album photo historique avec 30+ images", "Jeu de trivia avec suivi des scores", "Mode clair/sombre"],
      it: ["Mappa Leaflet interattiva con punti di interesse", "Album fotografico storico con 30+ immagini", "Gioco trivia con tracciamento punteggio", "Modalità chiara/scura"],
      zh: ["带兴趣点的互动Leaflet地图", "30+图片的历史相册", "带分数跟踪的知识问答游戏", "明暗模式支持"],
      ar: ["خريطة Leaflet تفاعلية مع نقاط اهتمام", "ألبوم صور تاريخي مع 30+ صورة", "لعبة معلومات مع تتبع النتائج", "دعم الوضع الفاتح/الداكن"],
      ru: ["Интерактивная карта Leaflet с достопримечательностями", "Исторический фотоальбом с 30+ изображениями", "Викторина с отслеживанием очков", "Поддержка светлой/тёмной темы"],
      el: ["Διαδραστικός χάρτης Leaflet με σημεία ενδιαφέροντος", "Ιστορικό φωτογραφικό άλμπουμ με 30+ εικόνες", "Παιχνίδι trivia με παρακολούθηση σκορ", "Υποστήριξη φωτεινού/σκοτεινού θέματος"],
    },
    screenshots: [ruta1, ruta2, ruta3, ruta4],
  },
];
