import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Translation dictionaries
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.solutions': 'Our Solutions',
    'nav.partnerships': 'Partnerships',
    'nav.environment': 'Environmental Commitment',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get Quote',
    'nav.contactUs': 'Contact Us',
    
    // Hero Section
    'hero.title': 'European Excellence in Industrial Solutions',
    'hero.subtitle': 'Century-old European expertise • Exclusive MENA partnerships',
    'hero.description': 'Your exclusive gateway to leading European manufacturers in the MENA region. We deliver proven industrial solutions for environmental treatment and process industries.',
    'hero.getQuote': 'Get Your Quote',
    'hero.learnMore': 'Learn More',
    
    // About Section
    'about.title': 'About SODITECH',
    'about.subtitle': 'Strategic Gateway to European Excellence',
    'about.description': 'Founded in 2024, SODITECH represents a strategic consolidation of leading European manufacturers, bringing century-old expertise to the MENA region through exclusive partnerships.',
    'about.coreStrengths': 'Our Core Strengths',
    'about.european': 'European Excellence',
    'about.europeanDesc': 'Direct access to century-old European manufacturers with proven track records',
    'about.technical': 'Technical Integration',
    'about.technicalDesc': 'Complete turnkey solutions from design to commissioning',
    'about.environmental': 'Environmental Focus',
    'about.environmentalDesc': 'Advanced technologies for sustainable industrial processes',
    'about.partnerships': 'Exclusive Partnerships',
    'about.partnershipsDesc': 'Sole MENA representative for leading European manufacturers',
    'about.local': 'Local Expertise',
    'about.localDesc': 'Regional understanding with international quality standards',
    'about.complete': 'Complete Solutions',
    'about.completeDesc': 'End-to-end project delivery and ongoing support',
    'about.genesis': 'Our Genesis',
    'about.heritage': 'Heritage (1868)',
    'about.heritageDesc': 'Our partners like FAURE Équipement bring over 150 years of industrial experience',
    'about.consolidation': 'Strategic Consolidation (2024)',
    'about.consolidationDesc': 'SODITECH was established as the exclusive MENA gateway for leading European manufacturers',
    'about.gateway': 'MENA Gateway (Today)',
    'about.gatewayDesc': 'Serving as the regional hub for technical excellence and project delivery',
    
    // Solutions Section
    'solutions.title': 'Our Solutions',
    'solutions.subtitle': 'Complete industrial solutions designed for efficiency, reliability, and environmental compliance. From concept to commissioning, we deliver integrated systems that meet your exact requirements.',
    'solutions.powder.title': 'Powder Handling',
    'solutions.powder.subtitle': 'Complete handling systems',
    'solutions.powder.description': 'Comprehensive solutions for powder and granular material handling including silos, screw conveyors, big bag stations, feeders, and pneumatic transport systems.',
    'solutions.water.title': 'Water & Sludge Treatment',
    'solutions.water.subtitle': 'Advanced treatment technologies',
    'solutions.water.description': 'State-of-the-art water and sludge treatment solutions including lime dosing, polymer preparation, sludge dewatering, and complete treatment lines.',
    'solutions.gas.title': 'Gas & Fume Treatment',
    'solutions.gas.subtitle': 'Clean air solutions',
    'solutions.gas.description': 'Comprehensive gas and fume treatment systems including scrubbers, filters, and emission control technologies for environmental compliance.',
    'solutions.features': 'Key Features:',
    'solutions.applications': 'Applications:',
    'solutions.learnMore': 'Learn More',
    'solutions.technicalSheet': 'Technical Sheet',
    'solutions.completeLines': 'Complete Process Lines',
    'solutions.completeLinesDesc': 'Need a complete integrated solution? We design and deliver end-to-end process lines combining multiple technologies for optimal performance and efficiency.',
    'solutions.requestCustom': 'Request Custom Solution',
    
    // Partnerships Section
    'partnerships.title': 'Exclusive European Partnerships',
    'partnerships.subtitle': 'Your Gateway to Leading European Manufacturers in the MENA Region',
    'partnerships.description': 'As exclusive MENA representatives, we bring you direct access to century-old European expertise through strategic partnerships with industry leaders.',
    'partnerships.whyMatter': 'Why Our Partnerships Matter',
    'partnerships.whyMatterDesc': 'Direct manufacturer relationships ensure authentic European quality, competitive pricing, comprehensive technical support, and complete warranty coverage throughout the MENA region.',
    'partnerships.environmentalTitle': 'Environmental Treatment Partners',
    'partnerships.processTitle': 'Process Industry Partners',
    'partnerships.specialty': 'Specialty',
    'partnerships.keySectors': 'Key Sectors',
    'partnerships.keyProducts': 'Key Products',
    'partnerships.coverage': 'MENA Regional Coverage',
    'partnerships.coverageDesc': 'Our partnerships extend across the entire MENA region, ensuring local support with European quality standards.',
    
    // Environment Section
    'environment.title': 'Environmental Commitment',
    'environment.subtitle': 'Sustainable Solutions for a Better Tomorrow',
    
    // Contact Section
    'contact.title': 'Get Your Quote Today',
    'contact.subtitle': 'Ready to discuss your industrial project? Our engineering team is here to provide expert guidance and customized solutions for your specific requirements.',
    'contact.emailTitle': 'Email',
    'contact.emailDesc': 'Send us your project requirements',
    'contact.phone': 'Phone & WhatsApp',
    'contact.phoneDesc': 'Direct line for urgent inquiries',
    'contact.office': 'Our Office',
    'contact.officeDesc': 'MENA Regional Headquarters',
    'contact.coverage': 'MENA Regional Coverage',
    'contact.quoteForm': 'Request Your Custom Quote',
    'contact.quoteFormDesc': 'Fill out the form below and our engineering team will prepare a detailed proposal for your project.',
    'contact.fullName': 'Full Name',
    'contact.emailField': 'Email Address',
    'contact.company': 'Company Name',
    'contact.country': 'Country',
    'contact.phoneField': 'Phone Number',
    'contact.projectType': 'Project Type',
    'contact.projectDetails': 'Project Details',
    'contact.projectDetailsPlaceholder': 'Please describe your project requirements, capacity needs, timeline, and any specific technical requirements...',
    'contact.techDocs': 'Technical Documents (Optional)',
    'contact.techDocsDesc': 'Upload technical specifications, drawings, or requirements',
    'contact.chooseFiles': 'Choose Files',
    'contact.sendQuote': 'Send Quote Request',
    'contact.callNow': 'Call Now',
    'contact.dubaiHq': 'Our Dubai Headquarters',
    'contact.dubaiHqDesc': 'Located in the heart of Dubai\'s technology hub, our headquarters serves the entire MENA region.',
    'contact.address': 'Address:',
    'contact.contact': 'Contact:',
    'contact.viewMaps': 'View on Maps',
    
    // Footer
    'footer.description': 'Your exclusive gateway to European industrial excellence in the MENA region.',
    'footer.quickLinks': 'Quick Links',
    'footer.solutions': 'Solutions',
    'footer.partnerships': 'Partnerships',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.allRights': 'All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'Qui Sommes Nous',
    'nav.solutions': 'Nos Solutions',
    'nav.partnerships': 'Partenariats',
    'nav.environment': 'Engagement Environnemental',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Devis',
    'nav.contactUs': 'Nous Contacter',
    
    // Hero Section
    'hero.title': 'Excellence Européenne en Solutions Industrielles',
    'hero.subtitle': 'Expertise européenne centenaire • Partenariats exclusifs MENA',
    'hero.description': 'Votre passerelle exclusive vers les fabricants européens leaders dans la région MENA. Nous livrons des solutions industrielles éprouvées pour le traitement environnemental et les industries de procédés.',
    'hero.getQuote': 'Obtenir un Devis',
    'hero.learnMore': 'En Savoir Plus',
    
    // About Section
    'about.title': 'À Propos de SODITECH',
    'about.subtitle': 'Passerelle Stratégique vers l\'Excellence Européenne',
    'about.description': 'Fondée en 2024, SODITECH représente une consolidation stratégique de fabricants européens leaders, apportant une expertise centenaire à la région MENA grâce à des partenariats exclusifs.',
    'about.coreStrengths': 'Nos Forces Principales',
    'about.european': 'Excellence Européenne',
    'about.europeanDesc': 'Accès direct aux fabricants européens centenaires avec des antécédents prouvés',
    'about.technical': 'Intégration Technique',
    'about.technicalDesc': 'Solutions clés en main complètes de la conception à la mise en service',
    'about.environmental': 'Focus Environnemental',
    'about.environmentalDesc': 'Technologies avancées pour des processus industriels durables',
    'about.partnerships': 'Partenariats Exclusifs',
    'about.partnershipsDesc': 'Représentant MENA exclusif pour les fabricants européens leaders',
    'about.local': 'Expertise Locale',
    'about.localDesc': 'Compréhension régionale avec des standards de qualité internationaux',
    'about.complete': 'Solutions Complètes',
    'about.completeDesc': 'Livraison de projet de bout en bout et support continu',
    'about.genesis': 'Notre Genèse',
    'about.heritage': 'Héritage (1868)',
    'about.heritageDesc': 'Nos partenaires comme FAURE Équipement apportent plus de 150 ans d\'expérience industrielle',
    'about.consolidation': 'Consolidation Stratégique (2024)',
    'about.consolidationDesc': 'SODITECH a été établie comme la passerelle MENA exclusive pour les fabricants européens leaders',
    'about.gateway': 'Passerelle MENA (Aujourd\'hui)',
    'about.gatewayDesc': 'Servant de hub régional pour l\'excellence technique et la livraison de projets',
    
    // Solutions Section
    'solutions.title': 'Nos Solutions',
    'solutions.subtitle': 'Solutions industrielles complètes conçues pour l\'efficacité, la fiabilité et la conformité environnementale. De la conception à la mise en service, nous livrons des systèmes intégrés qui répondent à vos exigences exactes.',
    'solutions.powder.title': 'Manutention de Poudres',
    'solutions.powder.subtitle': 'Systèmes de manutention complets',
    'solutions.powder.description': 'Solutions complètes pour la manutention de matériaux en poudre et granulaires incluant silos, convoyeurs à vis, stations big bag, alimentateurs et systèmes de transport pneumatique.',
    'solutions.water.title': 'Traitement des Eaux et Boues',
    'solutions.water.subtitle': 'Technologies de traitement avancées',
    'solutions.water.description': 'Solutions de pointe pour le traitement des eaux et boues incluant dosage de chaux, préparation de polymères, déshydratation des boues et lignes de traitement complètes.',
    'solutions.gas.title': 'Traitement des Gaz et Fumées',
    'solutions.gas.subtitle': 'Solutions d\'air propre',
    'solutions.gas.description': 'Systèmes complets de traitement des gaz et fumées incluant laveurs, filtres et technologies de contrôle des émissions pour la conformité environnementale.',
    'solutions.features': 'Caractéristiques Clés:',
    'solutions.applications': 'Applications:',
    'solutions.learnMore': 'En Savoir Plus',
    'solutions.technicalSheet': 'Fiche Technique',
    'solutions.completeLines': 'Lignes de Procédé Complètes',
    'solutions.completeLinesDesc': 'Besoin d\'une solution intégrée complète? Nous concevons et livrons des lignes de procédé de bout en bout combinant plusieurs technologies pour une performance et efficacité optimales.',
    'solutions.requestCustom': 'Demander une Solution Sur Mesure',
    
    // Partnerships Section
    'partnerships.title': 'Partenariats Européens Exclusifs',
    'partnerships.subtitle': 'Votre Passerelle vers les Fabricants Européens Leaders dans la Région MENA',
    'partnerships.description': 'En tant que représentants MENA exclusifs, nous vous donnons un accès direct à l\'expertise européenne centenaire grâce à des partenariats stratégiques avec les leaders de l\'industrie.',
    'partnerships.whyMatter': 'Pourquoi Nos Partenariats Importent',
    'partnerships.whyMatterDesc': 'Les relations directes avec les fabricants garantissent une qualité européenne authentique, des prix compétitifs, un support technique complet et une couverture de garantie complète dans toute la région MENA.',
    'partnerships.environmentalTitle': 'Partenaires Traitement Environnemental',
    'partnerships.processTitle': 'Partenaires Industrie de Procédés',
    'partnerships.specialty': 'Spécialité',
    'partnerships.keySectors': 'Secteurs Clés',
    'partnerships.keyProducts': 'Produits Clés',
    'partnerships.coverage': 'Couverture Régionale MENA',
    'partnerships.coverageDesc': 'Nos partenariats s\'étendent sur toute la région MENA, assurant un support local avec des standards de qualité européens.',
    
    // Environment Section
    'environment.title': 'Engagement Environnemental',
    'environment.subtitle': 'Solutions Durables pour un Avenir Meilleur',
    
    // Contact Section
    'contact.title': 'Obtenez Votre Devis Aujourd\'hui',
    'contact.subtitle': 'Prêt à discuter de votre projet industriel? Notre équipe d\'ingénierie est là pour fournir des conseils d\'experts et des solutions personnalisées pour vos exigences spécifiques.',
    'contact.emailTitle': 'Email',
    'contact.emailDesc': 'Envoyez-nous vos exigences de projet',
    'contact.phone': 'Téléphone et WhatsApp',
    'contact.phoneDesc': 'Ligne directe pour les demandes urgentes',
    'contact.office': 'Notre Bureau',
    'contact.officeDesc': 'Siège Régional MENA',
    'contact.coverage': 'Couverture Régionale MENA',
    'contact.quoteForm': 'Demandez Votre Devis Personnalisé',
    'contact.quoteFormDesc': 'Remplissez le formulaire ci-dessous et notre équipe d\'ingénierie préparera une proposition détaillée pour votre projet.',
    'contact.fullName': 'Nom Complet',
    'contact.emailField': 'Adresse Email',
    'contact.company': 'Nom de l\'Entreprise',
    'contact.country': 'Pays',
    'contact.phoneField': 'Numéro de Téléphone',
    'contact.projectType': 'Type de Projet',
    'contact.projectDetails': 'Détails du Projet',
    'contact.projectDetailsPlaceholder': 'Veuillez décrire vos exigences de projet, besoins de capacité, échéancier et toute exigence technique spécifique...',
    'contact.techDocs': 'Documents Techniques (Optionnel)',
    'contact.techDocsDesc': 'Télécharger les spécifications techniques, dessins ou exigences',
    'contact.chooseFiles': 'Choisir les Fichiers',
    'contact.sendQuote': 'Envoyer la Demande de Devis',
    'contact.callNow': 'Appeler Maintenant',
    'contact.dubaiHq': 'Notre Siège de Dubaï',
    'contact.dubaiHqDesc': 'Situé au cœur du hub technologique de Dubaï, notre siège dessert toute la région MENA.',
    'contact.address': 'Adresse:',
    'contact.contact': 'Contact:',
    'contact.viewMaps': 'Voir sur les Cartes',
    
    // Footer
    'footer.description': 'Votre passerelle exclusive vers l\'excellence industrielle européenne dans la région MENA.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.solutions': 'Solutions',
    'footer.partnerships': 'Partenariats',
    'footer.about': 'À Propos',
    'footer.contact': 'Contact',
    'footer.followUs': 'Suivez-Nous',
    'footer.allRights': 'Tous droits réservés.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.solutions': 'حلولنا',
    'nav.partnerships': 'الشراكات',
    'nav.environment': 'الالتزام البيئي',
    'nav.contact': 'اتصل بنا',
    'nav.getQuote': 'طلب عرض سعر',
    'nav.contactUs': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'التميز الأوروبي في الحلول الصناعية',
    'hero.subtitle': 'خبرة أوروبية عريقة • شراكات حصرية في منطقة الشرق الأوسط وشمال أفريقيا',
    'hero.description': 'بوابتكم الحصرية للشركات المصنعة الأوروبية الرائدة في منطقة الشرق الأوسط وشمال أفريقيا. نقدم حلولاً صناعية مجربة للمعالجة البيئية وصناعات العمليات.',
    'hero.getQuote': 'احصل على عرض سعر',
    'hero.learnMore': 'اعرف المزيد',
    
    // About Section
    'about.title': 'حول سوديتك',
    'about.subtitle': 'البوابة الاستراتيجية للتميز الأوروبي',
    'about.description': 'تأسست سوديتك في عام 2024، وتمثل دمجاً استراتيجياً للشركات المصنعة الأوروبية الرائدة، مما يجلب خبرة عريقة إلى منطقة الشرق الأوسط وشمال أفريقيا من خلال شراكات حصرية.',
    'about.coreStrengths': 'نقاط قوتنا الأساسية',
    'about.european': 'التميز الأوروبي',
    'about.europeanDesc': 'وصول مباشر للشركات المصنعة الأوروبية العريقة ذات السجل المثبت',
    'about.technical': 'التكامل التقني',
    'about.technicalDesc': 'حلول متكاملة شاملة من التصميم إلى التشغيل',
    'about.environmental': 'التركيز البيئي',
    'about.environmentalDesc': 'تقنيات متقدمة للعمليات الصناعية المستدامة',
    'about.partnerships': 'شراكات حصرية',
    'about.partnershipsDesc': 'الممثل الحصري في منطقة الشرق الأوسط وشمال أفريقيا للشركات المصنعة الأوروبية الرائدة',
    'about.local': 'الخبرة المحلية',
    'about.localDesc': 'فهم إقليمي مع معايير الجودة العالمية',
    'about.complete': 'الحلول الشاملة',
    'about.completeDesc': 'تسليم المشاريع من البداية للنهاية والدعم المستمر',
    'about.genesis': 'نشأتنا',
    'about.heritage': 'التراث (1868)',
    'about.heritageDesc': 'شركاؤنا مثل معدات فور يجلبون أكثر من 150 عاماً من الخبرة الصناعية',
    'about.consolidation': 'الدمج الاستراتيجي (2024)',
    'about.consolidationDesc': 'تأسست سوديتك كبوابة منطقة الشرق الأوسط وشمال أفريقيا الحصرية للشركات المصنعة الأوروبية الرائدة',
    'about.gateway': 'بوابة منطقة الشرق الأوسط وشمال أفريقيا (اليوم)',
    'about.gatewayDesc': 'تعمل كمركز إقليمي للتميز التقني وتسليم المشاريع',
    
    // Solutions Section
    'solutions.title': 'حلولنا',
    'solutions.subtitle': 'حلول صناعية شاملة مصممة للكفاءة والموثوقية والامتثال البيئي. من المفهوم إلى التشغيل، نقدم أنظمة متكاملة تلبي متطلباتكم الدقيقة.',
    'solutions.powder.title': 'معالجة المساحيق',
    'solutions.powder.subtitle': 'أنظمة معالجة شاملة',
    'solutions.powder.description': 'حلول شاملة لمعالجة المواد المسحوقة والحبيبية بما في ذلك الصوامع، ناقلات اللولب، محطات الأكياس الكبيرة، أجهزة التغذية، وأنظمة النقل الهوائي.',
    'solutions.water.title': 'معالجة المياه والحمأة',
    'solutions.water.subtitle': 'تقنيات معالجة متقدمة',
    'solutions.water.description': 'حلول متطورة لمعالجة المياه والحمأة بما في ذلك جرعات الجير، تحضير البوليمر، تجفيف الحمأة، وخطوط المعالجة الكاملة.',
    'solutions.gas.title': 'معالجة الغازات والأبخرة',
    'solutions.gas.subtitle': 'حلول الهواء النظيف',
    'solutions.gas.description': 'أنظمة شاملة لمعالجة الغازات والأبخرة بما في ذلك أجهزة الغسيل، المرشحات، وتقنيات التحكم في الانبعاثات للامتثال البيئي.',
    'solutions.features': 'الميزات الرئيسية:',
    'solutions.applications': 'التطبيقات:',
    'solutions.learnMore': 'اعرف المزيد',
    'solutions.technicalSheet': 'ورقة تقنية',
    'solutions.completeLines': 'خطوط العمليات الشاملة',
    'solutions.completeLinesDesc': 'هل تحتاج لحل متكامل شامل؟ نصمم وننجز خطوط عمليات شاملة تجمع تقنيات متعددة للأداء والكفاءة المثلى.',
    'solutions.requestCustom': 'طلب حل مخصص',
    
    // Partnerships Section
    'partnerships.title': 'شراكات أوروبية حصرية',
    'partnerships.subtitle': 'بوابتكم للشركات المصنعة الأوروبية الرائدة في منطقة الشرق الأوسط وشمال أفريقيا',
    'partnerships.description': 'كممثلين حصريين لمنطقة الشرق الأوسط وشمال أفريقيا، نوفر لكم الوصول المباشر للخبرة الأوروبية العريقة من خلال شراكات استراتيجية مع قادة الصناعة.',
    'partnerships.whyMatter': 'لماذا شراكاتنا مهمة',
    'partnerships.whyMatterDesc': 'العلاقات المباشرة مع الشركات المصنعة تضمن الجودة الأوروبية الأصيلة، أسعار تنافسية، دعم تقني شامل، وتغطية ضمان كاملة في جميع أنحاء منطقة الشرق الأوسط وشمال أفريقيا.',
    'partnerships.environmentalTitle': 'شركاء المعالجة البيئية',
    'partnerships.processTitle': 'شركاء صناعة العمليات',
    'partnerships.specialty': 'التخصص',
    'partnerships.keySectors': 'القطاعات الرئيسية',
    'partnerships.keyProducts': 'المنتجات الرئيسية',
    'partnerships.coverage': 'التغطية الإقليمية لمنطقة الشرق الأوسط وشمال أفريقيا',
    'partnerships.coverageDesc': 'تمتد شراكاتنا عبر منطقة الشرق الأوسط وشمال أفريقيا بأكملها، مما يضمن الدعم المحلي مع معايير الجودة الأوروبية.',
    
    // Environment Section
    'environment.title': 'الالتزام البيئي',
    'environment.subtitle': 'حلول مستدامة لغد أفضل',
    
    // Contact Section
    'contact.title': 'احصل على عرض سعرك اليوم',
    'contact.subtitle': 'مستعد لمناقشة مشروعك الصناعي؟ فريق الهندسة لدينا هنا لتقديم إرشادات الخبراء والحلول المخصصة لمتطلباتك المحددة.',
    'contact.emailTitle': 'البريد الإلكتروني',
    'contact.emailDesc': 'أرسل لنا متطلبات مشروعك',
    'contact.phone': 'الهاتف والواتساب',
    'contact.phoneDesc': 'خط مباشر للاستفسارات العاجلة',
    'contact.office': 'مكتبنا',
    'contact.officeDesc': 'المقر الإقليمي لمنطقة الشرق الأوسط وشمال أفريقيا',
    'contact.coverage': 'التغطية الإقليمية لمنطقة الشرق الأوسط وشمال أفريقيا',
    'contact.quoteForm': 'اطلب عرض سعرك المخصص',
    'contact.quoteFormDesc': 'املأ النموذج أدناه وسيقوم فريق الهندسة لدينا بإعداد عرض مفصل لمشروعك.',
    'contact.fullName': 'الاسم الكامل',
    'contact.emailField': 'عنوان البريد الإلكتروني',
    'contact.company': 'اسم الشركة',
    'contact.country': 'البلد',
    'contact.phoneField': 'رقم الهاتف',
    'contact.projectType': 'نوع المشروع',
    'contact.projectDetails': 'تفاصيل المشروع',
    'contact.projectDetailsPlaceholder': 'يرجى وصف متطلبات مشروعك، احتياجات السعة، الجدول الزمني، وأي متطلبات تقنية محددة...',
    'contact.techDocs': 'المستندات التقنية (اختياري)',
    'contact.techDocsDesc': 'رفع المواصفات التقنية، الرسومات أو المتطلبات',
    'contact.chooseFiles': 'اختر الملفات',
    'contact.sendQuote': 'إرسال طلب عرض السعر',
    'contact.callNow': 'اتصل الآن',
    'contact.dubaiHq': 'مقرنا الرئيسي في دبي',
    'contact.dubaiHqDesc': 'يقع في قلب مركز دبي التكنولوجي، يخدم مقرنا الرئيسي منطقة الشرق الأوسط وشمال أفريقيا بأكملها.',
    'contact.address': 'العنوان:',
    'contact.contact': 'الاتصال:',
    'contact.viewMaps': 'عرض على الخرائط',
    
    // Footer
    'footer.description': 'بوابتكم الحصرية للتميز الصناعي الأوروبي في منطقة الشرق الأوسط وشمال أفريقيا.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.solutions': 'الحلول',
    'footer.partnerships': 'الشراكات',
    'footer.about': 'حولنا',
    'footer.contact': 'اتصل بنا',
    'footer.followUs': 'تابعونا',
    'footer.allRights': 'جميع الحقوق محفوظة.',
  }
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};