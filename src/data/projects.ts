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
  titleI18n?: Record<string, string>;
  description: Record<string, string>;
  type: ProjectType;
  technologies: string[];
  github?: string;
  vercel?: string;
  railway?: string;
  highlights?: Record<string, string[]>;
  screenshotDescriptions?: Record<string, string[]>;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "quizquest",
    title: "QuizQuest",
    titleI18n: {
      es: "QuizQuest",
    },
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
    screenshotDescriptions: {
      en: ["Main screen with quiz categories, score area, and quick access to active challenges."],
      es: ["Pantalla principal con categorías de quiz, área de puntuación y acceso rápido a desafíos activos."],
      de: ["Hauptansicht mit Quizkategorien, Punktebereich und schnellem Zugriff auf aktive Herausforderungen."],
      fr: ["Écran principal avec catégories de quiz, zone de score et accès rapide aux défis actifs."],
      it: ["Schermata principale con categorie di quiz, area punteggio e accesso rapido alle sfide attive."],
      zh: ["主界面包含测验分类、得分区域和对进行中挑战的快速访问。"],
      ar: ["الشاشة الرئيسية تضم فئات الاختبار ومنطقة النقاط ووصولاً سريعًا إلى التحديات النشطة."],
      ru: ["Главный экран с категориями викторин, зоной очков и быстрым доступом к активным заданиям."],
      el: ["Κύρια οθόνη με κατηγορίες κουίζ, περιοχή σκορ και γρήγορη πρόσβαση σε ενεργές προκλήσεις."],
    },
    screenshots: [quizquest],
  },
  {
    id: "cvcraft",
    title: "CVCraft",
    titleI18n: {
      es: "Generador de CV",
    },
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
    screenshotDescriptions: {
      en: [
        "Editor panel to fill personal and professional information in structured sections.",
        "Live CV preview showing selected template design and final printable layout.",
      ],
      es: [
        "Panel de edición para completar información personal y profesional por secciones.",
        "Vista previa en tiempo real del CV con la plantilla seleccionada y diseño final.",
      ],
      de: [
        "Editorbereich zum Ausfüllen persönlicher und beruflicher Informationen in strukturierten Abschnitten.",
        "Live-Vorschau des Lebenslaufs mit ausgewähltem Vorlagendesign und finalem Drucklayout.",
      ],
      fr: [
        "Panneau d’édition pour compléter les informations personnelles et professionnelles par sections.",
        "Aperçu en direct du CV avec le modèle choisi et la mise en page finale imprimable.",
      ],
      it: [
        "Pannello di modifica per compilare informazioni personali e professionali in sezioni strutturate.",
        "Anteprima CV in tempo reale con template selezionato e layout finale stampabile.",
      ],
      zh: [
        "编辑面板用于按结构化分区填写个人与职业信息。",
        "实时简历预览，展示所选模板设计和最终可打印版式。",
      ],
      ar: [
        "لوحة تحرير لإدخال المعلومات الشخصية والمهنية ضمن أقسام منظمة.",
        "معاينة مباشرة للسيرة الذاتية تعرض القالب المختار والتنسيق النهائي القابل للطباعة.",
      ],
      ru: [
        "Панель редактирования для заполнения личной и профессиональной информации по разделам.",
        "Предпросмотр резюме в реальном времени с выбранным шаблоном и финальной печатной версткой.",
      ],
      el: [
        "Πίνακας επεξεργασίας για συμπλήρωση προσωπικών και επαγγελματικών στοιχείων σε δομημένες ενότητες.",
        "Ζωντανή προεπισκόπηση CV με το επιλεγμένο πρότυπο και την τελική εκτυπώσιμη διάταξη.",
      ],
    },
    screenshots: [cvcraft1, cvcraft2],
  },
  {
    id: "transcriptai",
    title: "TranscriptAI",
    titleI18n: {
      es: "Generador de Presentaciones",
    },
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
    github: "https://github.com/jpecinagithub/Generador-de-Presentaciones",
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
    screenshotDescriptions: {
      en: [
        "Workspace to upload meeting transcripts and configure slide generation options.",
        "Generated presentation draft with editable sections and AI suggestions.",
        "Presentations overview listing recent projects, status, and quick actions.",
      ],
      es: [
        "Espacio de trabajo para subir transcripciones y configurar opciones de generación.",
        "Borrador de presentación generado con secciones editables y sugerencias de IA.",
        "Vista general de presentaciones con proyectos recientes, estado y acciones rápidas.",
      ],
      de: [
        "Arbeitsbereich zum Hochladen von Meeting-Transkripten und Konfigurieren der Foliengenerierung.",
        "Generierter Präsentationsentwurf mit bearbeitbaren Abschnitten und KI-Vorschlägen.",
        "Übersicht der Präsentationen mit aktuellen Projekten, Status und Schnellaktionen.",
      ],
      fr: [
        "Espace de travail pour importer des transcriptions de réunion et configurer la génération des diapositives.",
        "Brouillon de présentation généré avec sections modifiables et suggestions IA.",
        "Vue d’ensemble des présentations avec projets récents, statut et actions rapides.",
      ],
      it: [
        "Area di lavoro per caricare trascrizioni di riunioni e configurare le opzioni di generazione slide.",
        "Bozza di presentazione generata con sezioni modificabili e suggerimenti IA.",
        "Panoramica presentazioni con progetti recenti, stato e azioni rapide.",
      ],
      zh: [
        "工作区可上传会议转录并配置幻灯片生成选项。",
        "生成的演示文稿草稿包含可编辑分区和 AI 建议。",
        "演示总览列出最近项目、状态和快捷操作。",
      ],
      ar: [
        "مساحة عمل لرفع نصوص الاجتماعات وضبط خيارات إنشاء الشرائح.",
        "مسودة عرض تقديمي مولدة مع أقسام قابلة للتعديل واقتراحات بالذكاء الاصطناعي.",
        "نظرة عامة على العروض تتضمن المشاريع الحديثة والحالة والإجراءات السريعة.",
      ],
      ru: [
        "Рабочая область для загрузки стенограмм встреч и настройки параметров генерации слайдов.",
        "Сгенерированный черновик презентации с редактируемыми разделами и подсказками ИИ.",
        "Обзор презентаций с недавними проектами, статусом и быстрыми действиями.",
      ],
      el: [
        "Χώρος εργασίας για ανέβασμα απομαγνητοφωνήσεων συναντήσεων και ρύθμιση επιλογών δημιουργίας slides.",
        "Παραγόμενο προσχέδιο παρουσίασης με επεξεργάσιμες ενότητες και προτάσεις AI.",
        "Επισκόπηση παρουσιάσεων με πρόσφατα έργα, κατάσταση και γρήγορες ενέργειες.",
      ],
    },
    screenshots: [transcriptai1, transcriptai2, pptreuniones],
  },
  {
    id: "mountain-locator",
    title: "Mountain Locator",
    titleI18n: {
      es: "Localizador de Montañas",
      de: "Berg-Lokalisierer",
      fr: "Localisateur de Montagnes",
      it: "Localizzatore di Montagne",
      zh: "山脉定位器",
      ar: "محدد مواقع الجبال",
      ru: "Локатор Гор",
      el: "Εντοπιστής Βουνών",
    },
    description: {
      en: "A web app for discovering and locating mountains with an interactive map, useful details, and a visual gallery for each route.",
      es: "Una web app para descubrir y localizar montañas con mapa interactivo, detalles útiles y galería visual para cada ruta.",
      de: "Eine Web-App zum Entdecken und Lokalisieren von Bergen mit interaktiver Karte, nützlichen Details und visueller Galerie pro Route.",
      fr: "Une application web pour découvrir et localiser des montagnes avec carte interactive, informations utiles et galerie visuelle par itinéraire.",
      it: "Una web app per scoprire e localizzare montagne con mappa interattiva, dettagli utili e galleria visiva per ogni percorso.",
      zh: "一个用于发现和定位山脉的网页应用，包含交互地图、实用信息以及每条路线的可视化图库。",
      ar: "تطبيق ويب لاكتشاف الجبال وتحديد مواقعها مع خريطة تفاعلية وتفاصيل مفيدة ومعرض مرئي لكل مسار.",
      ru: "Веб-приложение для поиска и определения гор с интерактивной картой, полезными деталями и визуальной галереей по каждому маршруту.",
      el: "Μια web εφαρμογή για ανακάλυψη και εντοπισμό βουνών με διαδραστικό χάρτη, χρήσιμες λεπτομέρειες και οπτική γκαλερί για κάθε διαδρομή.",
    },
    type: "frontend",
    technologies: ["React", "TypeScript", "Leaflet", "Tailwind CSS", "Vite"],
    highlights: {
      en: ["Interactive mountain map", "Route and location details", "Visual gallery with key spots", "Responsive design for mobile and desktop"],
      es: ["Mapa interactivo de montañas", "Detalles de rutas y ubicación", "Galería visual con puntos clave", "Diseño responsive para móvil y escritorio"],
      de: ["Interaktive Bergkarte", "Details zu Routen und Standort", "Visuelle Galerie mit wichtigen Punkten", "Responsives Design für Mobil und Desktop"],
      fr: ["Carte interactive des montagnes", "Détails des itinéraires et de localisation", "Galerie visuelle avec points clés", "Design responsive mobile et desktop"],
      it: ["Mappa interattiva delle montagne", "Dettagli di percorso e posizione", "Galleria visiva con punti chiave", "Design responsive per mobile e desktop"],
      zh: ["交互式山脉地图", "路线与位置详情", "包含关键点的可视化图库", "适配移动端与桌面的响应式设计"],
      ar: ["خريطة جبال تفاعلية", "تفاصيل المسارات والموقع", "معرض مرئي مع النقاط الرئيسية", "تصميم متجاوب للجوال وسطح المكتب"],
      ru: ["Интерактивная карта гор", "Детали маршрутов и локаций", "Визуальная галерея с ключевыми точками", "Адаптивный дизайн для мобильных и десктопа"],
      el: ["Διαδραστικός χάρτης βουνών", "Λεπτομέρειες διαδρομής και τοποθεσίας", "Οπτική γκαλερί με βασικά σημεία", "Responsive σχεδίαση για κινητό και desktop"],
    },
    screenshotDescriptions: {
      en: [
        "Main map with mountain markers and quick filters to narrow visible peaks.",
        "Mountain detail view with altitude, coordinates, and key route information.",
        "Route section showing access points and recommended path overview.",
        "Image gallery of mountain areas to support visual exploration.",
      ],
      es: [
        "Mapa principal con marcadores de montañas y filtros rápidos para afinar la búsqueda.",
        "Vista de detalle de montaña con altitud, coordenadas e información clave de ruta.",
        "Sección de rutas con puntos de acceso y vista general del recorrido recomendado.",
        "Galería de imágenes de zonas de montaña para apoyar la exploración visual.",
      ],
      de: [
        "Hauptkarte mit Bergmarkierungen und Schnellfiltern zur Eingrenzung sichtbarer Gipfel.",
        "Detailansicht eines Berges mit Höhe, Koordinaten und wichtigen Routendaten.",
        "Routenbereich mit Zugangspunkten und Überblick über die empfohlene Strecke.",
        "Bildergalerie von Berggebieten zur visuellen Erkundung.",
      ],
      fr: [
        "Carte principale avec marqueurs de montagnes et filtres rapides pour affiner les sommets visibles.",
        "Vue détaillée d’une montagne avec altitude, coordonnées et informations clés d’itinéraire.",
        "Section d’itinéraire avec points d’accès et aperçu du parcours recommandé.",
        "Galerie d’images des zones de montagne pour faciliter l’exploration visuelle.",
      ],
      it: [
        "Mappa principale con indicatori delle montagne e filtri rapidi per restringere le cime visibili.",
        "Vista dettaglio montagna con altitudine, coordinate e informazioni chiave sul percorso.",
        "Sezione percorsi con punti di accesso e panoramica dell’itinerario consigliato.",
        "Galleria immagini delle aree montane per supportare l’esplorazione visiva.",
      ],
      zh: [
        "主地图包含山峰标记和快速筛选，用于缩小可见山峰范围。",
        "山峰详情视图提供海拔、坐标和关键路线信息。",
        "路线分区展示入口点和推荐路径概览。",
        "山地区域图片画廊，支持可视化探索。",
      ],
      ar: [
        "الخريطة الرئيسية تحتوي على علامات الجبال وفلاتر سريعة لتضييق القمم الظاهرة.",
        "عرض تفاصيل الجبل مع الارتفاع والإحداثيات ومعلومات المسار الأساسية.",
        "قسم المسارات يوضح نقاط الوصول ونظرة عامة على الطريق الموصى به.",
        "معرض صور لمناطق جبلية لدعم الاستكشاف البصري.",
      ],
      ru: [
        "Основная карта с метками гор и быстрыми фильтрами для сужения видимых вершин.",
        "Экран деталей горы с высотой, координатами и ключевой информацией по маршруту.",
        "Раздел маршрутов с точками доступа и обзором рекомендуемого пути.",
        "Галерея изображений горных районов для визуального изучения.",
      ],
      el: [
        "Κύριος χάρτης με δείκτες βουνών και γρήγορα φίλτρα για περιορισμό των ορατών κορυφών.",
        "Προβολή λεπτομερειών βουνού με υψόμετρο, συντεταγμένες και βασικές πληροφορίες διαδρομής.",
        "Ενότητα διαδρομών με σημεία πρόσβασης και επισκόπηση προτεινόμενης πορείας.",
        "Gallery εικόνων ορεινών περιοχών για υποστήριξη οπτικής εξερεύνησης.",
      ],
    },
    screenshots: ["/images/mountains1.jpg", "/images/mountains2.jpg", "/images/mountains3.jpg", "/images/mountains4.jpg"],
  },
  {
    id: "ruta-san-josemaria",
    title: "Ruta San Josemaría",
    titleI18n: {
      es: "Ruta San Josemaría",
    },
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
    github: "https://github.com/jpecinagithub/Recorrido-Historico-San-Josemaria-en-Logrono",
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
    screenshotDescriptions: {
      en: [
        "Interactive map centered on historical points related to San Josemaría in Logroño.",
        "Historical content page with contextual text and period references.",
        "Photo album section featuring archival images and location notes.",
        "Trivia screen with questions to learn key facts from the historical route.",
      ],
      es: [
        "Mapa interactivo centrado en puntos históricos vinculados a San Josemaría en Logroño.",
        "Pantalla de contenido histórico con texto contextual y referencias de la época.",
        "Sección de álbum con imágenes de archivo y notas de localización.",
        "Pantalla de trivial con preguntas para aprender hechos clave del recorrido.",
      ],
      de: [
        "Interaktive Karte mit Fokus auf historische Orte zu San Josemaría in Logroño.",
        "Historische Inhaltsseite mit Kontexttexten und Verweisen auf die Epoche.",
        "Fotoalbum-Bereich mit Archivbildern und Standorthinweisen.",
        "Trivia-Bildschirm mit Fragen zu Schlüsselfakten der historischen Route.",
      ],
      fr: [
        "Carte interactive centrée sur les points historiques liés à San Josemaría à Logroño.",
        "Page de contenu historique avec texte contextuel et références d’époque.",
        "Section album photo avec images d’archives et notes de localisation.",
        "Écran de quiz avec des questions pour apprendre les faits clés du parcours historique.",
      ],
      it: [
        "Mappa interattiva centrata sui punti storici legati a San Josemaría a Logroño.",
        "Pagina di contenuto storico con testo contestuale e riferimenti del periodo.",
        "Sezione album fotografico con immagini d’archivio e note di localizzazione.",
        "Schermata quiz con domande per apprendere i fatti chiave del percorso storico.",
      ],
      zh: [
        "交互式地图聚焦于洛格罗尼奥与圣何塞玛利亚相关的历史点位。",
        "历史内容页面包含背景文本和年代参考。",
        "相册分区展示档案图片和地点说明。",
        "问答界面通过问题帮助学习历史路线的关键事实。",
      ],
      ar: [
        "خريطة تفاعلية تتمحور حول النقاط التاريخية المرتبطة بسان خوسيماريا في لوغرونيو.",
        "صفحة محتوى تاريخي تتضمن نصًا سياقيًا ومراجع زمنية.",
        "قسم ألبوم صور يضم صورًا أرشيفية وملاحظات مواقع.",
        "شاشة أسئلة تعليمية للتعرف على الحقائق الأساسية للمسار التاريخي.",
      ],
      ru: [
        "Интерактивная карта, сфокусированная на исторических точках, связанных с Сан-Хосемарией в Логроньо.",
        "Страница исторического контента с контекстным текстом и ссылками на эпоху.",
        "Раздел фотоальбома с архивными изображениями и заметками о локациях.",
        "Экран викторины с вопросами для изучения ключевых фактов исторического маршрута.",
      ],
      el: [
        "Διαδραστικός χάρτης με επίκεντρο ιστορικά σημεία που σχετίζονται με τον San Josemaría στο Logroño.",
        "Σελίδα ιστορικού περιεχομένου με συμφραζόμενο κείμενο και αναφορές εποχής.",
        "Ενότητα φωτογραφικού άλμπουμ με αρχειακές εικόνες και σημειώσεις τοποθεσίας.",
        "Οθόνη trivia με ερωτήσεις για εκμάθηση βασικών στοιχείων της ιστορικής διαδρομής.",
      ],
    },
    screenshots: [ruta1, ruta2, ruta3, ruta4],
  },
];
