/**
 * Softalyx - Language Switcher
 */

// Global translations object that will store all translations
let translations = {
    'en': {
        // Navigation
        'nav_home': 'Home',
        'nav_services': 'Services',
        'nav_licenses': 'Licenses',
        'nav_contact': 'Contact',
        
        // Common elements
        'footer_rights': 'All rights reserved.',
        'contact_us': 'Contact Us',
        'send_message': 'Send Us a Message',
        'view_site': 'View Site',
        'logout': 'Logout',
        
        // Admin login
        'admin_panel': 'Admin Panel',
        'username': 'Username',
        'password': 'Password',
        'remember_me': 'Remember Me',
        'login': 'Login',
        'invalid_credentials': 'Invalid username or password',
        'return_to_website': 'Return to Website',
        
        // Hero section
        'hero_title': 'Optimize Workflows with Atlassian Experts',
        'hero_subtitle': 'Dedicated teams, cost-effective licenses, 24/7 support',
        'discuss_project': 'Discuss Project',
        'buy_license': 'Buy License',
        
        // Benefits section
        'why_choose': 'Why Choose Softalyx',
        'certified_partner': 'Certified Partner',
        'certified_partner_desc': 'Official Atlassian Solutions Partner with certified experts',
        'agile_teams': 'Agile Teams',
        'agile_teams_desc': 'Dedicated development teams following agile methodologies',
        'flexible_pricing': 'Flexible Pricing',
        'flexible_pricing_desc': 'Competitive rates and volume discounts on licenses',
        'seamless_migration': 'Seamless Migration',
        'seamless_migration_desc': 'Expert data migration and system integration services',
        
        // Services section
        'our_services': 'Our Services',
        'services_subtitle': 'Experience unmatched expertise and value with our Atlassian services',
        'outsourcing': 'Outsourcing',
        'outsourcing_desc': 'Dedicated development teams, DevOps services, and custom integrations',
        'licenses': 'Licenses',
        'licenses_desc': 'Cost-effective Atlassian product licenses with volume discounts',
        'training': 'Training',
        'training_desc': 'Expert-led training sessions for your team on Atlassian products',
        'learn_more': 'Learn More',
        
        // Clients section
        'trusted_by': 'Trusted By',
        
        // Admin dashboard
        'dashboard': 'Dashboard',
        'contact_information': 'Contact Information',
        'social_links': 'Social Links',
        'work_hours': 'Work Hours',
        'location': 'Location',
        'faq_editor': 'FAQ Editor',
        'footer_settings': 'Footer Settings',
        'logo_settings': 'Logo Settings',
        'client_logos': 'Client Logos',
        'language_settings': 'Language Settings',
        'save_changes': 'Save Changes',
        'welcome_admin': 'Welcome to Softalyx Admin Panel',
        'admin_note': 'Use the sidebar navigation to manage different aspects of your website.',
        
        // New translations requested by user
        'authorized_partner': 'Authorized Atlassian Partner',
        'atlassian_products': 'Atlassian Products',
        'why_buy': 'Why Buy From Softalyx?',
        'get_started': 'Ready to Get Started?',
        'faq': 'Frequently Asked Questions',
        'atlassian_outsourcing': 'Atlassian Outsourcing',
        'license_reselling': 'License Reselling',
        'atlassian_training': 'Atlassian Training',
        'start_project': 'Start Your Project',
        
        // Form fields
        'company_name': 'Company Name',
        'service_type': 'Service Type',
        'project_details': 'Project Details',
        
        // FAQ
        'response_time_question': 'How quickly can you respond to inquiries?',
        'response_time_answer': 'We typically respond to all inquiries within 2 business days. For urgent matters, please call our support line directly or write to us on Telegram.',
        
        // Services descriptions
        'expert_teams': 'Our expert teams provide comprehensive Atlassian development and support services to help you maximize your investment in Atlassian tools.',
        'team_customization': 'Team Customization',
        'team_customization_desc': 'Flexible team composition based on your project requirements, from individual specialists to full-scale development teams.',
        'devops_services': 'DevOps Services',
        'devops_services_desc': 'Expert infrastructure automation, cloud migration, and server administration for Atlassian Data Center products.',
        
        // Licensing information
        'authorized_partner_desc': 'As an authorized Atlassian partner, we provide cost-effective licensing solutions with expert guidance and ongoing support.',
        'volume_discounts': 'Volume Discounts',
        'volume_discounts_desc': 'Competitive pricing with significant discounts for volume purchases across all Atlassian products.',
        'auto_renewal': 'Auto-Renewal',
        'auto_renewal_desc': 'Hassle-free license management with automatic renewal options to ensure business continuity.',
        'license_consultation': 'License Consultation',
        'license_consultation_desc': 'Expert advice on selecting the right Atlassian products and license tiers for your specific needs.',
        
        // Training programs
        'training_desc_full': 'Comprehensive training programs designed to help your team master Atlassian tools and maximize productivity.',
        'customized_workshops': 'Customized Workshops',
        'customized_workshops_desc': 'Tailored training sessions focused on your team\'s specific needs and use cases.',
        'hands_on_learning': 'Hands-on Learning',
        'hands_on_learning_desc': 'Practical exercises and real-world scenarios to ensure effective knowledge transfer.',
        'certification_preparation': 'Certification Preparation',
        'certification_preparation_desc': 'Specialized training to help your team prepare for Atlassian certification exams with access to Atlassian accreditation resources.',
        
        // Contact form
        'tell_requirements': 'Tell us about your requirements and we\'ll get back to you with a tailored solution',
        
        // Partner description
        'partner_description': 'As an authorized Atlassian Solutions Partner, Softalyx provides competitive pricing on the full range of Atlassian products. Our licensing experts will help you select the right products and tiers for your organization\'s needs, ensuring you get the best value for your investment.',
        'official_partner': 'Official Atlassian Partner',
        'volume_discounts_available': 'Volume Discounts Available',
        'license_management': 'License Management Portal',
        'expert_support': 'Expert Configuration Support',
        
        // Products section
        'explore_products': 'Explore our comprehensive range of Atlassian products',
        'jira_software': 'Jira Software',
        'jira_desc': 'Project and issue tracking for software teams',
        'confluence': 'Confluence',
        'confluence_desc': 'Content collaboration for teams',
        'jira_service': 'Jira Service Management',
        'jira_service_desc': 'Service desk and customer support solution',
        'bitbucket': 'Bitbucket',
        'bitbucket_desc': 'Git code management for teams',
        'trello': 'Trello',
        'trello_desc': 'Visual project management',
        'negotiable': 'Negotiable',
        'request_quote': 'Request a Quote',
        'products_note': 'This is not a complete list of available products.',
        
        // Benefits
        'cost_savings': 'Cost Savings',
        'cost_savings_desc': 'Competitive pricing with volume discounts and special promotions for new and existing customers.',
        'expert_guidance': 'Expert Guidance',
        'expert_guidance_desc': 'Our licensing specialists help you choose the right products and tiers for your specific needs.',
        'compliance': 'Compliance',
        'compliance_desc': 'Ensure your organization stays compliant with proper licensing and regular audits.',
        'ongoing_support': 'Ongoing Support',
        'ongoing_support_desc': 'Dedicated account management and technical support for all your Atlassian products.',
        
        // Call to action
        'contact_licensing': 'Contact our licensing team for a personalized quote tailored to your organization\'s needs.',
        'volume_discounts_available_short': 'Volume discounts available',
        'free_migration': 'Free license migration assistance',
        'expert_config': 'Expert configuration support',
        'bank_transfer': 'Bank transfer payment option',
        'or_call': 'Or call us at: +380660087119',
        
        // FAQ
        'license_steps': 'What are the steps to get a license?',
        'process_simple': 'The process is simple:',
        'estimated_discount': 'We provide you with an estimated discount based on your configuration (users, version, host type, etc.)',
        'make_contract': 'We make a contract with you',
        'provide_license': 'We provide you with a license from Atlassian',
        'pay_postfactum': 'You pay us (post factum)',
        'payment_methods': 'What payment methods do you accept?',
        'bank_transfers': 'Currently, we accept bank transfers. For enterprise clients, we can arrange custom payment terms.',
        'response_time': 'How quickly can you respond to inquiries?',
        'response_time_answer': 'We typically respond to all inquiries within 2 business days. For urgent matters, please call our support line directly or write to us on Telegram.',
        'oncall_support': 'Do you offer on-call support for Atlassian products?',
        'oncall_support_answer': 'Yes, we offer on-call support for critical issues with Atlassian products. Our support team is available 24/7 for clients with support contracts.',
        'cloud_migration': 'Can you help with migrating from Server to Cloud?',
        'cloud_migration_answer': 'Absolutely! We specialize in Atlassian Server to Cloud migrations as well as Cloud to Cloud migrations and can help ensure a smooth transition with minimal disruption to your workflows.',
        'payment_methods_licenses': 'What payment methods do you accept for licenses?',
        'payment_methods_licenses_answer': 'We accept bank transfers. For enterprise clients, we can also arrange custom payment terms.',
        
        // Contact section
        'get_in_touch': 'Get in touch with our Atlassian experts',
        'email_us': 'Email Us',
        'call_us': 'Call Us',
        'work_hours': 'Mon-Fri, 9am-6pm EST',
        'live_chat': 'Live Chat',
        'available_on': 'Available on WhatsApp',
        'and_telegram': 'and Telegram',
        'available_on_telegram': 'Available on Telegram',
        'fill_form': 'Fill out the form below and we\'ll get back to you as soon as possible',
        'full_name': 'Full Name',
        'email_address': 'Email Address',
        'phone_number': 'Phone Number',
        'subject': 'Subject',
        'general_inquiry': 'General Inquiry',
        'privacy_note': 'Your information will be sent to our team via email. We take your privacy seriously and will not share your data with third parties.',
        'connect_with_us': 'Connect with us on:',
        'name': 'Full Name',
        'email': 'Email Address',
        'phone': 'Phone Number (optional)',
        'subject': 'Subject',
        'general_inquiry': 'General Inquiry',
        'services_info': 'Services Information',
        'license_purchase': 'License Purchase',
        'technical_support': 'Technical Support',
        'message': 'Message',
        'send': 'Send Message',
        'faq_heading': 'Frequently Asked Questions',
        'step_quote': 'Get a Quote',
        'step_quote_desc': 'We provide you with an estimated discount based on your configuration (users, version, host type, etc.)',
        'step_contract': 'Sign Contract',
        'step_contract_desc': 'We make a contract with you that outlines terms and conditions',
        'step_license': 'Receive License',
        'step_license_desc': 'We provide you with a license directly from Atlassian',
        'step_payment': 'Post-Payment',
        'step_payment_desc': 'You pay us after receiving your license (post factum)',
        
        // Ready to Get Started
        'get_started': 'Ready to Get Started?',
        
        // License Management
        'license_tracking': 'Comprehensive License Tracking',
        'license_tracking_desc': 'We handle all license documentation and provide regular renewal reminders',
        'volume_discounts_desc_short': 'Get better rates with volume purchases across all Atlassian products',
        
        // Licensing Page Title
        'atlassian_licenses': 'Atlassian Licenses',
        'licensing_subtitle': 'Cost-effective licensing solutions with expert guidance and support',
        
        // Updated translation
        'quick_links': 'Quick Links',
        'help_with_license': 'Get help with license selection, installation, and ongoing configuration',
        
        // Contact form
        'name': 'Name',
        'email': 'Email',
        'phone': 'Phone',
        'subject': 'Subject',
        'message': 'Message',
        'send': 'Send Message',
        'contact_success': 'Your message has been sent successfully. We will get back to you soon!',
        'data_consent': 'I consent to Softalyx processing my personal data for the purpose of handling my request and contacting me.',
        // Contact information
        'visit_us': 'Visit Us',
        'contact_form': 'Contact Form',
        'your_name': 'Your Name',
        'your_email': 'Your Email',
        'your_phone': 'Your Phone (optional)',
        'your_company': 'Your Company (optional)',
        'your_message': 'Your Message',
        'message_sent': 'Message Sent!',
        'message_error': 'Error Sending Message',
        'address': 'Address',
        join_team: "I want to join Softalyx",
        partnership_request: "Partnership request with Softalyx"
    },
    'ua': {
        // Navigation
        'nav_home': 'Головна',
        'nav_services': 'Послуги',
        'nav_licenses': 'Ліцензії',
        'nav_contact': 'Контакти',
        
        // Common elements
        'footer_rights': 'Всі права захищені.',
        'contact_us': 'Зв\'яжіться з нами',
        'send_message': 'Надіслати повідомлення',
        'view_site': 'Переглянути сайт',
        'logout': 'Вийти',
        
        // Admin login
        'admin_panel': 'Панель адміністратора',
        'username': 'Ім\'я користувача',
        'password': 'Пароль',
        'remember_me': 'Запам\'ятати мене',
        'login': 'Увійти',
        'invalid_credentials': 'Невірне ім\'я користувача або пароль',
        'return_to_website': 'Повернутися на сайт',
        
        // Hero section
        'hero_title': 'Оптимізуйте робочі процеси з експертами Atlassian',
        'hero_subtitle': 'Виділені команди, економічні ліцензії, цілодобова підтримка',
        'discuss_project': 'Обговорити проект',
        'buy_license': 'Купити ліцензію',
        
        // Benefits section
        'why_choose': 'Чому обирають Softalyx',
        'certified_partner': 'Сертифікований партнер',
        'certified_partner_desc': 'Офіційний партнер Atlassian Solutions з сертифікованими експертами',
        'agile_teams': 'Agile команди',
        'agile_teams_desc': 'Спеціалізовані команди розробників, що працюють по гибким методологиям',
        'flexible_pricing': 'Гнучке ціноутворення',
        'flexible_pricing_desc': 'Конкурентні ставки та знижки на обсяг ліцензій',
        'seamless_migration': 'Безперебійна міграція',
        'seamless_migration_desc': 'Експертна міграція даних та інтеграція систем',
        
        // Services section
        'our_services': 'Наші послуги',
        'services_subtitle': 'Комплексні рішення Atlassian для потреб вашого бізнесу',
        'outsourcing': 'Аутсорсинг',
        'outsourcing_desc': 'Виділені команди розробників, послуги DevOps та індивідуальні інтеграції',
        'licenses': 'Ліцензії',
        'licenses_desc': 'Доступні ліцензії на продукти Atlassian зі знижками на обсяг',
        'training': 'Навчання',
        'training_desc': 'Навчальні сесії під керівництвом експертів для вашої команди з продуктів Atlassian',
        'learn_more': 'Дізнатися більше',
        
        // Clients section
        'trusted_by': 'Нам довіряють',
        
        // Admin dashboard
        'dashboard': 'Панель управління',
        'contact_information': 'Контактна інформація',
        'social_links': 'Соціальні посилання',
        'work_hours': 'Робочі години',
        'location': 'Місцезнаходження',
        'faq_editor': 'Редактор FAQ',
        'footer_settings': 'Налаштування футера',
        'logo_settings': 'Налаштування логотипу',
        'client_logos': 'Логотипи клієнтів',
        'language_settings': 'Налаштування мови',
        'save_changes': 'Зберегти зміни',
        'welcome_admin': 'Ласкаво просимо до панелі адміністратора Softalyx',
        'admin_note': 'Використовуйте бічну навігацію для керування різними аспектами вашого веб-сайту.',
        
        // New translations requested by user
        'authorized_partner': 'Авторизований партнер Atlassian',
        'atlassian_products': 'Продукти Atlassian',
        'why_buy': 'Чому купувати у Softalyx?',
        'get_started': 'Готові розпочати?',
        'faq': 'Часті запитання',
        'atlassian_outsourcing': 'Аутсорсинг Atlassian',
        'license_reselling': 'Перепродаж ліцензій',
        'atlassian_training': 'Навчання Atlassian',
        'start_project': 'Розпочати проект',
        
        // Form fields
        'company_name': 'Назва компанії',
        'service_type': 'Тип послуги',
        'project_details': 'Деталі проекту',
        'other': 'Інше',
        
        // Services descriptions
        'expert_teams': 'Наші експертні команди надають комплексні послуги з розробки та підтримки Atlassian, щоб допомогти вам максимізувати інвестиції в інструменти Atlassian.',
        'team_customization': 'Налаштування команди',
        'team_customization_desc': 'Гнучкий склад команди на основі вимог вашого проекту, від окремих спеціалістів до повномасштабних команд розробників.',
        'devops_services': 'Послуги DevOps',
        'devops_services_desc': 'Експертна автоматизація інфраструктури, міграція в хмару та адміністрування серверів для продуктів Atlassian Data Center.',
        
        // Licensing information
        'authorized_partner_desc': 'Як авторизований партнер Atlassian, ми надаємо економічно ефективні рішення з ліцензування з експертним керівництвом та постійною підтримкою.',
        'volume_discounts': 'Знижки за обсяг',
        'volume_discounts_desc': 'Конкурентні ціни зі значними знижками на оптові закупівлі всіх продуктів Atlassian.',
        'auto_renewal': 'Автоматичне продовження',
        'auto_renewal_desc': 'Безпроблемне управління ліцензіями з опціями автоматичного продовження для забезпечення безперервності бізнесу.',
        'license_consultation': 'Консультація з ліцензування',
        'license_consultation_desc': 'Експертні поради щодо вибору правильних продуктів Atlassian та рівнів ліцензій для ваших конкретних потреб.',
        
        // Training programs
        'training_desc_full': 'Комплексні навчальні програми, розроблені для того, щоб допомогти вашій команді освоїти інструменти Atlassian та максимізувати продуктивність.',
        'customized_workshops': 'Індивідуальні семінари',
        'customized_workshops_desc': 'Індивідуальні навчальні сесії, зосереджені на конкретних потребах вашої команди.',
        'hands_on_learning': 'Практичне навчання',
        'hands_on_learning_desc': 'Практичні вправи та сценарії з реального світу для забезпечення ефективної передачі знань.',
        'certification_preparation': 'Підготовка до сертифікації',
        'certification_preparation_desc': 'Спеціалізоване навчання, щоб допомогти вашій команді підготуватися до іспитів на сертифікацію Atlassian з доступом до ресурсів акредитації Atlassian.',
        
        // Contact form
        'tell_requirements': 'Розкажіть нам про свої вимоги, і ми повернемося до вас з індивідуальним рішенням',
        
        // Partner description
        'partner_description': 'Як авторизований партнер Atlassian Solutions, Softalyx пропонує конкурентні ціни на повний спектр продуктів Atlassian. Наші експерти з ліцензування допоможуть вам вибрати правильні продукти та рівні для потреб вашої організації, забезпечуючи найкращу цінність для ваших інвестицій.',
        'official_partner': 'Офіційний партнер Atlassian',
        'volume_discounts_available': 'Доступні знижки за обсяг',
        'license_management': 'Портал управління ліцензіями',
        'expert_support': 'Експертна підтримка конфігурації',
        
        // Products section
        'explore_products': 'Дослідіть наш комплексний асортимент продуктів Atlassian',
        'jira_software': 'Jira Software',
        'jira_desc': 'Відстеження проектів та проблем для команд розробників',
        'confluence': 'Confluence',
        'confluence_desc': 'Співпраця з контентом для команд',
        'jira_service': 'Jira Service Management',
        'jira_service_desc': 'Рішення для служби підтримки та обслуговування клієнтів',
        'bitbucket': 'Bitbucket',
        'bitbucket_desc': 'Управління кодом Git для команд',
        'trello': 'Trello',
        'trello_desc': 'Візуальне управління проектами',
        'negotiable': 'Обговорюється',
        'request_quote': 'Запитати ціну',
        'products_note': 'Це не повний список доступних продуктів.',
        
        // Benefits
        'cost_savings': 'Економія коштів',
        'cost_savings_desc': 'Конкурентні ціни зі знижками за обсяг та спеціальними пропозиціями для нових та існуючих клієнтів.',
        'expert_guidance': 'Експертне керівництво',
        'expert_guidance_desc': 'Наші спеціалісти з ліцензування допоможуть вам вибрати правильні продукти та рівні для ваших конкретних потреб.',
        'compliance': 'Відповідність',
        'compliance_desc': 'Забезпечте відповідність вашої організації належному ліцензуванню та регулярним аудитам.',
        'ongoing_support': 'Постійна підтримка',
        'ongoing_support_desc': 'Професійне управління обліковими записами та технічна підтримка для всіх ваших продуктів Atlassian.',
        
        // Call to action
        'contact_licensing': 'Зв\'яжіться з нашою командою ліцензування для отримання персоналізованої пропозиції, адаптованої до потреб вашої організації.',
        'volume_discounts_available_short': 'Доступні знижки за обсяг',
        'free_migration': 'Безкоштовна допомога з міграцією ліцензій',
        'expert_config': 'Експертна підтримка конфігурації',
        'bank_transfer': 'Можливість оплати банківським переказом',
        'or_call': 'Або зателефонуйте нам за номером: +380660087119',
        
        // FAQ
        'license_steps': 'Які кроки для отримання ліцензії?',
        'process_simple': 'Процес простий:',
        'estimated_discount': 'Ми надаємо вам орієнтовну знижку на основі вашої конфігурації (користувачі, версія, тип хосту тощо)',
        'make_contract': 'Ми укладаємо з вами контракт',
        'provide_license': 'Ми надаємо вам ліцензію від Atlassian',
        'pay_postfactum': 'Ви платите нам (постфактум)',
        'payment_methods': 'Які способи оплати ви приймаєте?',
        'bank_transfers': 'Наразі ми приймаємо банківські перекази. Для корпоративних клієнтів ми можемо організувати індивідуальні умови оплати.',
        'response_time': 'Як швидко ви можете відповісти на запити?',
        'response_time_answer': 'До 2 робочих днів',
        'oncall_support': 'Чи пропонуєте ви підтримку за викликом для продуктів Atlassian?',
        'oncall_support_answer': 'Так, ми пропонуємо підтримку за викликом для критичних проблем з продуктами Atlassian. Наша команда підтримки доступна 24/7 для клієнтів з контрактами на підтримку.',
        'cloud_migration': 'Чи можете ви допомогти з міграцією в клауд?',
        'cloud_migration_answer': 'Абсолютно! Ми спеціалізуємося на міграціях Atlassian Server в клауд, а також міграціях між клауд-рішеннями, і можемо допомогти забезпечити плавний перехід з мінімальним порушенням ваших робочих процесів.',
        'payment_methods_licenses': 'Які способи оплати ви приймаєте для ліцензій?',
        'payment_methods_licenses_answer': 'Ми приймаємо банківські перекази. Для корпоративних клієнтів ми також можемо організувати індивідуальні умови оплати.',
        
        // Contact section
        'get_in_touch': 'Зв\'яжіться з нашими експертами Atlassian',
        'email_us': 'Напишіть нам',
        'call_us': 'Зателефонуйте нам',
        'work_hours': 'Пн-Пт, 9:00-18:00 EST',
        'live_chat': 'Онлайн чат',
        'available_on': 'Доступний у WhatsApp',
        'and_telegram': 'та Telegram',
        'available_on_telegram': 'Доступний у Telegram',
        'fill_form': 'Заповніть форму нижче, і ми зв\'яжемося з вами якнайшвидше',
        'full_name': 'Повне ім\'я',
        'email_address': 'Електронна адреса',
        'phone_number': 'Номер телефону',
        'subject': 'Тема',
        'general_inquiry': 'Загальне запитання',
        'privacy_note': 'Ваша інформація буде надіслана нашій команді електронною поштою. Ми серйозно ставимося до вашої конфіденційності та не будемо ділитися вашими даними з третіми сторонами.',
        'connect_with_us': 'Зв\'яжіться з нами в:',
        'name': 'ПІБ',
        'email': 'Електронна пошта',
        'phone': 'Номер телефону (опціонально)',
        'subject': 'Тема',
        'general_inquiry': 'Загальне запитання',
        'services_info': 'Інформація про послуги',
        'license_purchase': 'Придбання ліцензії',
        'technical_support': 'Технічна підтримка',
        'message': 'Повідомлення',
        'send': 'Надіслати повідомлення',
        'faq_heading': 'Поширені запитання',
        'step_quote': 'Отримати ціну',
        'step_quote_desc': 'Ми надаємо вам орієнтовну знижку на основі вашої конфігурації (користувачі, версія, тип хосту тощо)',
        'step_contract': 'Підписати контракт',
        'step_contract_desc': 'Ми укладаємо з вами договір, який окреслює умови співпраці',
        'step_license': 'Отримати ліцензію',
        'step_license_desc': 'Ми надаємо вам ліцензію безпосередньо від Atlassian',
        'step_payment': 'Оплата після отримання',
        'step_payment_desc': 'Ви оплачуєте після отримання ліцензії (постфактум)',
        
        // Ready to Get Started
        'get_started': 'Готові розпочати?',
        
        // License Management
        'license_tracking': 'Комплексне відстеження ліцензій',
        'license_tracking_desc': 'Ми обробляємо всю документацію щодо ліцензій та надаємо регулярні нагадування про продовження',
        'volume_discounts_desc_short': 'Отримайте кращі ставки при об\'ємних закупівлях всіх продуктів Atlassian',
        
        // Licensing Page Title
        'atlassian_licenses': 'Ліцензії Atlassian',
        'licensing_subtitle': 'Економічно вигідні рішення з ліцензування з експертним керівництвом і підтримкою',
        
        // Updated translation
        'quick_links': 'Швидкі посилання',
        'help_with_license': 'Отримайте допомогу з вибором ліцензії, встановленням та поточною конфігурацією',
        
        // Contact form
        'name': 'Ім\'я',
        'email': 'Електронна пошта',
        'phone': 'Телефон',
        'subject': 'Тема',
        'message': 'Повідомлення',
        'send': 'Надіслати повідомлення',
        'contact_success': 'Ваше повідомлення успішно надіслано. Ми зв\'яжемося з вами найближчим часом!',
        'data_consent': 'Я надаю згоду Softalyx на обробку моїх персональних даних з метою опрацювання мого запиту та зв\'язку зі мною.',
        // Contact information
        'visit_us': 'Відвідайте нас',
        'contact_form': 'Контактна форма',
        'your_name': 'Ваше ім\'я',
        'your_email': 'Ваша електронна пошта',
        'your_phone': 'Ваш телефон (опціонально)',
        'your_company': 'Ваша компанія (опціонально)',
        'your_message': 'Ваше повідомлення',
        'message_sent': 'Повідомлення надіслано!',
        'message_error': 'Помилка при надсиланні повідомлення',
        'address': 'Адреса',
        join_team: "Я хочу приєднатися до Softalyx",
        partnership_request: "Запит на партнерство з Softalyx"
    },
    'ru': {
        // Navigation
        'nav_home': 'Главная',
        'nav_services': 'Услуги',
        'nav_licenses': 'Лицензии',
        'nav_contact': 'Контакты',
        
        // Common elements
        'footer_rights': 'Все права защищены.',
        'contact_us': 'Свяжитесь с нами',
        'send_message': 'Отправить сообщение',
        'view_site': 'Просмотр сайта',
        'logout': 'Выйти',
        
        // Admin login
        'admin_panel': 'Панель администратора',
        'username': 'Имя пользователя',
        'password': 'Пароль',
        'remember_me': 'Запомнить меня',
        'login': 'Войти',
        'invalid_credentials': 'Неверное имя пользователя или пароль',
        'return_to_website': 'Вернуться на сайт',
        
        // Hero section
        'hero_title': 'Оптимизируйте рабочие процессы с экспертами Atlassian',
        'hero_subtitle': 'Выделенные команды, экономичные лицензии, круглосуточная поддержка',
        'discuss_project': 'Обсудить проект',
        'buy_license': 'Купить лицензию',
        
        // Benefits section
        'why_choose': 'Почему выбирают Softalyx',
        'certified_partner': 'Сертифицированный партнер',
        'certified_partner_desc': 'Официальный партнер Atlassian Solutions с сертифицированными экспертами',
        'agile_teams': 'Agile команды',
        'agile_teams_desc': 'Специализированные команды разработчиков, работающие по гибким методологиям',
        'flexible_pricing': 'Гибкое ценообразование',
        'flexible_pricing_desc': 'Конкурентные ставки и скидки на объем лицензий',
        'seamless_migration': 'Бесперебойная миграция',
        'seamless_migration_desc': 'Экспертная миграция данных и интеграция систем',
        
        // Services section
        'our_services': 'Наши услуги',
        'services_subtitle': 'Комплексные решения Atlassian для потребностей вашего бизнеса',
        'outsourcing': 'Аутсорсинг',
        'outsourcing_desc': 'Выделенные команды разработчиков, услуги DevOps и индивидуальные интеграции',
        'licenses': 'Лицензии',
        'licenses_desc': 'Доступные лицензии на продукты Atlassian со скидками на объем',
        'training': 'Обучение',
        'training_desc': 'Обучающие сессии под руководством экспертов для вашей команды по продуктам Atlassian',
        'learn_more': 'Узнать больше',
        
        // Clients section
        'trusted_by': 'Нам доверяют',
        
        // Admin dashboard
        'dashboard': 'Панель управления',
        'contact_information': 'Контактная информация',
        'social_links': 'Социальные ссылки',
        'work_hours': 'Рабочие часы',
        'location': 'Местоположение',
        'faq_editor': 'Редактор FAQ',
        'footer_settings': 'Настройки футера',
        'logo_settings': 'Настройки логотипа',
        'client_logos': 'Логотипы клиентов',
        'language_settings': 'Настройки языка',
        'save_changes': 'Сохранить изменения',
        'welcome_admin': 'Добро пожаловать в панель администратора Softalyx',
        'admin_note': 'Используйте боковую навигацию для управления различными аспектами вашего веб-сайта.',
        
        // New translations requested by user
        'authorized_partner': 'Авторизованный партнер Atlassian',
        'atlassian_products': 'Продукты Atlassian',
        'why_buy': 'Почему покупать у Softalyx?',
        'get_started': 'Готовы начать?',
        'faq': 'Часто задаваемые вопросы',
        'atlassian_outsourcing': 'Аутсорсинг Atlassian',
        'license_reselling': 'Перепродажа лицензий',
        'atlassian_training': 'Обучение Atlassian',
        'start_project': 'Начать проект',
        
        // Form fields
        'company_name': 'Название компании',
        'service_type': 'Тип услуги',
        'project_details': 'Детали проекта',
        'other': 'Другое',
        
        // Services descriptions
        'expert_teams': 'Наши экспертные команды предоставляют комплексные услуги по разработке и поддержке Atlassian, чтобы помочь вам максимизировать инвестиции в инструменты Atlassian.',
        'team_customization': 'Настройка команды',
        'team_customization_desc': 'Гибкий состав команды на основе требований вашего проекта, от отдельных специалистов до полномасштабных команд разработчиков.',
        'devops_services': 'Услуги DevOps',
        'devops_services_desc': 'Экспертная автоматизация инфраструктуры, миграция в облако и администрирование серверов для продуктов Atlassian Data Center.',
        
        // Licensing information
        'authorized_partner_desc': 'Как авторизованный партнер Atlassian, мы предоставляем экономически эффективные решения по лицензированию с экспертным руководством и постоянной поддержкой.',
        'volume_discounts': 'Скидки за объем',
        'volume_discounts_desc': 'Конкурентные цены со значительными скидками на оптовые закупки всех продуктов Atlassian.',
        'auto_renewal': 'Автоматическое продление',
        'auto_renewal_desc': 'Беспроблемное управление лицензиями с опциями автоматического продления для обеспечения непрерывности бизнеса.',
        'license_consultation': 'Консультация по лицензированию',
        'license_consultation_desc': 'Экспертные советы по выбору правильных продуктов Atlassian и уровней лицензий для ваших конкретных потребностей.',
        
        // Training programs
        'training_desc_full': 'Комплексные учебные программы, разработанные для того, чтобы помочь вашей команде освоить инструменты Atlassian и максимизировать производительность.',
        'customized_workshops': 'Индивидуальные семинары',
        'customized_workshops_desc': 'Индивидуальные учебные сессии, сосредоточенные на конкретных потребностях и случаях использования вашей команды.',
        'hands_on_learning': 'Практическое обучение',
        'hands_on_learning_desc': 'Практические упражнения и сценарии из реального мира для обеспечения эффективной передачи знаний.',
        'certification_preparation': 'Подготовка к сертификации',
        'certification_preparation_desc': 'Специализированное обучение, чтобы помочь вашей команде подготовиться к экзаменам на сертификацию Atlassian с доступом к ресурсам аккредитации Atlassian.',
        
        // Contact form
        'tell_requirements': 'Расскажите нам о своих требованиях, и мы вернемся к вам с индивидуальным решением',
        
        // Partner description
        'partner_description': 'Как авторизованный партнер Atlassian Solutions, Softalyx предлагает конкурентные цены на полный спектр продуктов Atlassian. Наши эксперты по лицензированию помогут вам выбрать правильные продукты и уровни для потребностей вашей организации, обеспечивая наилучшую ценность для ваших инвестиций.',
        'official_partner': 'Официальный партнер Atlassian',
        'volume_discounts_available': 'Доступны скидки за объем',
        'license_management': 'Портал управления лицензиями',
        'expert_support': 'Экспертная поддержка конфигурации',
        
        // Products section
        'explore_products': 'Исследуйте наш комплексный ассортимент продуктов Atlassian',
        'jira_software': 'Jira Software',
        'jira_desc': 'Отслеживание проектов и проблем для команд разработчиков',
        'confluence': 'Confluence',
        'confluence_desc': 'Сотрудничество с контентом для команд',
        'jira_service': 'Jira Service Management',
        'jira_service_desc': 'Решение для службы поддержки и обслуживания клиентов',
        'bitbucket': 'Bitbucket',
        'bitbucket_desc': 'Управление кодом Git для команд',
        'trello': 'Trello',
        'trello_desc': 'Визуальное управление проектами',
        'negotiable': 'Обсуждается',
        'request_quote': 'Запросить цену',
        'products_note': 'Это не полный список доступных продуктов.',
        
        // Benefits
        'cost_savings': 'Экономия средств',
        'cost_savings_desc': 'Конкурентные цены со скидками за объем и специальными предложениями для новых и существующих клиентов.',
        'expert_guidance': 'Экспертное руководство',
        'expert_guidance_desc': 'Наши специалисты по лицензированию помогут вам выбрать правильные продукты и уровни для ваших конкретных потребностей.',
        'compliance': 'Соответствие',
        'compliance_desc': 'Обеспечьте соответствие вашей организации надлежащему лицензированию и регулярным аудитам.',
        'ongoing_support': 'Постоянная поддержка',
        'ongoing_support_desc': 'Профессиональное управление учетными записями и техническая поддержка для всех ваших продуктов Atlassian.',
        
        // Call to action
        'contact_licensing': 'Свяжитесь с нашей командой лицензирования для получения персонализированного предложения, адаптированного к потребностям вашей организации.',
        'volume_discounts_available_short': 'Доступны скидки за объем',
        'free_migration': 'Бесплатная помощь с миграцией лицензий',
        'expert_config': 'Экспертная поддержка конфигурации',
        'bank_transfer': 'Возможность оплаты банковским переводом',
        'or_call': 'Или позвоните нам по номеру: +380660087119',
        
        // FAQ
        'license_steps': 'Какие шаги для получения лицензии?',
        'process_simple': 'Процесс прост:',
        'estimated_discount': 'Мы предоставляем вам ориентировочную скидку на основе вашей конфигурации (пользователи, версия, тип хоста и т.д.)',
        'make_contract': 'Мы заключаем с вами контракт',
        'provide_license': 'Мы предоставляем вам лицензию от Atlassian',
        'pay_postfactum': 'Вы платите нам (постфактум)',
        'payment_methods': 'Какие способы оплаты вы принимаете?',
        'bank_transfers': 'В настоящее время мы принимаем банковские переводы. Для корпоративных клиентов мы можем организовать индивидуальные условия оплаты.',
        'response_time': 'Как быстро вы можете ответить на запросы?',
        'response_time_answer': 'До 2 рабочих дней',
        'oncall_support': 'Предлагаете ли вы поддержку по вызову для продуктов Atlassian?',
        'oncall_support_answer': 'Да, мы предлагаем поддержку по вызову для критических проблем с продуктами Atlassian. Наша команда поддержки доступна 24/7 для клиентов с контрактами на поддержку.',
        'cloud_migration': 'Можете ли вы помочь с миграцией в облачный хостинг?',
        'cloud_migration_answer': 'Абсолютно! Мы специализируемся на миграциях Atlassian Server на Cloud, а также миграциях Cloud на Cloud, и можем помочь обеспечить плавный переход с минимальным нарушением ваших рабочих процессов.',
        'payment_methods_licenses': 'Какие способы оплаты вы принимаете для лицензий?',
        'payment_methods_licenses_answer': 'Мы принимаем банковские переводы. Для корпоративных клиентов мы также можем организовать индивидуальные условия оплаты.',
        
        // Contact section
        'get_in_touch': 'Свяжитесь с нашими экспертами Atlassian',
        'email_us': 'Напишите нам',
        'call_us': 'Позвоните нам',
        'work_hours': 'Пн-Пт, 9:00-18:00 EST',
        'live_chat': 'Онлайн чат',
        'available_on': 'Доступен в WhatsApp',
        'and_telegram': 'и Telegram',
        'available_on_telegram': 'Доступен в Telegram',
        'fill_form': 'Заполните форму ниже, и мы свяжемся с вами как можно скорее',
        'full_name': 'Полное имя',
        'email_address': 'Электронный адрес',
        'phone_number': 'Номер телефона',
        'subject': 'Тема',
        'general_inquiry': 'Общий запрос',
        'privacy_note': 'Ваша информация будет отправлена нашей команде по электронной почте. Мы серьезно относимся к вашей конфиденциальности и не будем делиться вашими данными с третьими сторонами.',
        'connect_with_us': 'Свяжитесь с нами в:',
        'name': 'ФИО',
        'email': 'Электронная почта',
        'phone': 'Номер телефона (опционально)',
        'subject': 'Тема',
        'general_inquiry': 'Общий запрос',
        'services_info': 'Информация об услугах',
        'license_purchase': 'Приобретение лицензии',
        'technical_support': 'Техническая поддержка',
        'message': 'Сообщение',
        'send': 'Отправить сообщение',
        'faq_heading': 'Часто задаваемые вопросы',
        'step_quote': 'Получить цену',
        'step_quote_desc': 'Мы предоставляем вам ориентировочную скидку на основе вашей конфигурации (пользователи, версия, тип хоста и т.д.)',
        'step_contract': 'Подписать контракт',
        'step_contract_desc': 'Мы заключаем с вами договор, который определяет условия сотрудничества',
        'step_license': 'Получить лицензию',
        'step_license_desc': 'Мы предоставляем вам лицензию непосредственно от Atlassian',
        'step_payment': 'Оплата после получения',
        'step_payment_desc': 'Вы оплачиваете после получения лицензии (постфактум)',
        
        // Ready to Get Started
        'get_started': 'Готовы начать?',
        
        // License Management
        'license_tracking': 'Комплексное отслеживание лицензий',
        'license_tracking_desc': 'Мы обрабатываем всю документацию по лицензиям и предоставляем регулярные напоминания о продлении',
        'volume_discounts_desc_short': 'Получите лучшие ставки при объемных закупках всех продуктов Atlassian',
        
        // Licensing Page Title
        'atlassian_licenses': 'Лицензии Atlassian',
        'licensing_subtitle': 'Экономически выгодные решения по лицензированию с экспертным руководством и поддержкой',
        
        // Updated translation
        'quick_links': 'Быстрые ссылки',
        'help_with_license': 'Получите помощь с выбором лицензии, установкой и текущей конфигурацией',
        
        // Contact form
        'name': 'Имя',
        'email': 'Электронная почта',
        'phone': 'Телефон',
        'subject': 'Тема',
        'message': 'Сообщение',
        'send': 'Отправить сообщение',
        'contact_success': 'Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время!',
        'data_consent': 'Я даю согласие Softalyx на обработку моих персональных данных с целью обработки моего запроса и связи со мной.',
        // Contact information
        'visit_us': 'Посетите нас',
        'contact_form': 'Контактная форма',
        'your_name': 'Ваше имя',
        'your_email': 'Ваша электронная почта',
        'your_phone': 'Ваш телефон (опционально)',
        'your_company': 'Ваша компания (опционально)',
        'your_message': 'Ваше сообщение',
        'message_sent': 'Сообщение отправлено!',
        'message_error': 'Ошибка при отправке сообщения',
        'address': 'Адрес',
        join_team: "Я хочу присоединиться к Softalyx",
        partnership_request: "Запрос на партнерство с Softalyx"
    }
};

// Store custom translations from admin panel
let customTranslations = {};

// Make functions available globally
window.setLanguage = setLanguage;
window.updateCustomTranslation = updateCustomTranslation;
window.getTranslations = getTranslations;
window.findTranslationKeyByValue = findTranslationKeyByValue;

// Initialize language functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Language.js: DOM loaded, initializing language functionality');
    initLanguage();
});

/**
 * Load custom translations from localStorage
 */
function loadCustomTranslations() {
    console.log('Language.js: Loading custom translations');
    const savedCustomTranslations = localStorage.getItem('customTranslations');
    if (savedCustomTranslations) {
        try {
            customTranslations = JSON.parse(savedCustomTranslations);
            
            // Merge custom translations with default translations
            for (const lang in customTranslations) {
                if (translations[lang]) {
                    translations[lang] = {...translations[lang], ...customTranslations[lang]};
                }
            }
            console.log('Language.js: Custom translations loaded successfully');
        } catch (e) {
            console.error('Error loading custom translations:', e);
        }
    } else {
        console.log('Language.js: No custom translations found in localStorage');
    }
}

/**
 * Initialize language functionality
 */
function initLanguage() {
    console.log('Language.js: Initializing language functionality');
    
    try {
        // Load custom translations from localStorage
        loadCustomTranslations();
        
        // Setup language switcher
        setupLanguageSwitcher();
        
        // Load saved language or default to English
        const savedLanguage = localStorage.getItem('language') || 'en';
        console.log(`Language.js: Saved language found: ${savedLanguage}`);
        
        // Set the language
        setLanguage(savedLanguage);
        
        // Make sure the correct language button is active
        const languageButtons = document.querySelectorAll('.language-switcher .language-options a');
        languageButtons.forEach(button => {
            const lang = button.getAttribute('data-lang');
            if (lang === savedLanguage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        console.log('Language.js: Language initialization complete');
    } catch (error) {
        console.error('Language.js: Error initializing language functionality:', error);
    }
}

/**
 * Setup language switcher
 */
function setupLanguageSwitcher() {
    console.log('Language.js: Setting up language switcher');
    
    // Find language switcher container
    const languageSwitcher = document.querySelector('.language-switcher');
    if (!languageSwitcher) {
        console.error('Language.js: Language switcher not found in the DOM');
        return;
    }
    
    console.log('Language.js: Language switcher found in the DOM');
    
    // Get all language buttons - fix selector to match HTML structure
    const languageButtons = languageSwitcher.querySelectorAll('.language-options a');
    console.log(`Language.js: Found ${languageButtons.length} language buttons`);
    
    // Add click event to each language button
    languageButtons.forEach(button => {
        const lang = button.getAttribute('data-lang');
        console.log(`Language.js: Adding click event to language button: ${lang}`);
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(`Language.js: Language button clicked: ${lang}`);
            
            // Update active class
            languageButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Set language with reload flag set to true since this is a user action
            setLanguage(lang, true);
        });
    });
    
    console.log('Language.js: Language switcher UI updated successfully');
}

/**
 * Update language switcher UI
 */
function updateLanguageSwitcherUI(currentLang) {
    console.log(`Language.js: Updating language switcher UI for language: ${currentLang}`);
    
    // Find language switcher container
    const languageSwitcher = document.querySelector('.language-switcher');
    if (!languageSwitcher) {
        console.error('Language.js: Language switcher not found when updating UI');
        return;
    }
    
    // Get all language buttons
    const languageButtons = languageSwitcher.querySelectorAll('.language-option');
    
    // Update active state for each button
    languageButtons.forEach(button => {
        const lang = button.getAttribute('data-lang');
        
        if (lang === currentLang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    console.log('Language.js: Language switcher UI updated successfully');
}

/**
 * Set the language and update UI
 * @param {string} lang - The language code to set
 * @param {boolean} shouldReload - Whether to reload the page (default: false)
 */
function setLanguage(lang, shouldReload = false) {
    console.log('Language.js: Setting language to:', lang);
    
    // Get the current language to check if it's actually changing
    const currentLang = localStorage.getItem('language') || 'en';
    const isChangingLanguage = currentLang !== lang;
    
    // Save language preference to localStorage
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'ua' ? 'uk' : lang;
    
    // Apply translations to the page
    applyTranslations(lang);
    
    // Only reload if explicitly requested AND if we're not on the admin dashboard
    if (shouldReload && isChangingLanguage && !window.location.pathname.includes('admin-dashboard.html')) {
        console.log('Language.js: Reloading page to apply all translations');
        window.location.reload();
    } else {
        console.log('Language.js: Not reloading page - either not requested or on admin page');
    }
}

/**
 * Apply translations to the page
 */
function applyTranslations(lang) {
    console.log(`Language.js: Applying translations for language: ${lang}`);
    
    try {
        // Get translation for current language
        const translation = translations[lang] || translations['en'];
        
        // Get all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        console.log(`Language.js: Found ${elements.length} elements with data-i18n attribute`);
        
        if (elements.length === 0) {
            console.log('Language.js: No elements with data-i18n attribute found, manually updating text content');
        }
        
        // Update text content for each element
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translation[key]) {
                element.textContent = translation[key];
                console.log(`Language.js: Updated element with key ${key} to "${translation[key]}"`);
            } else {
                console.warn(`Language.js: No translation found for key ${key}`);
            }
        });
        
        // Update navigation menu
        updateNavigation(translation);
        
        // Update common elements
        updateCommonElements(translation);
        
        // Update page-specific elements
        updatePageSpecificElements(lang);
        
        console.log(`Language.js: Successfully applied translations for language: ${lang}`);
    } catch (error) {
        console.error(`Language.js: Error applying translations for ${lang}:`, error);
    }
}

/**
 * Update navigation menu
 */
function updateNavigation(translation) {
    // Update main navigation
    const navItems = {
        'index.html': 'nav_home',
        'services.html': 'nav_services',
        'licenses.html': 'nav_licenses',
        'contact.html': 'nav_contact'
    };
    
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const key = navItems[href];
        
        if (key && translation[key]) {
            link.textContent = translation[key];
        }
    });
    
    // Update admin sidebar navigation
    const adminNavItems = {
        'dashboard': 'dashboard',
        'contact-info': 'contact_information',
        'social-links': 'social_links',
        'work-hours': 'work_hours',
        'location': 'location',
        'faq-editor': 'faq_editor',
        'footer-settings': 'footer_settings',
        'logo-settings': 'logo_settings',
        'client-logos': 'client_logos',
        'language-settings': 'language_settings'
    };
    
    const adminNavLinks = document.querySelectorAll('.admin-sidebar-menu a');
    adminNavLinks.forEach(link => {
        const section = link.getAttribute('data-section');
        const key = adminNavItems[section];
        
        if (key && translation[key]) {
            // Preserve the icon
            const icon = link.querySelector('i');
            if (icon) {
                const iconHTML = icon.outerHTML;
                link.innerHTML = iconHTML + ' ' + translation[key];
            } else {
                link.textContent = translation[key];
            }
        }
    });
}

/**
 * Update common elements
 */
function updateCommonElements(translation) {
    // Update footer copyright
    const footerCopyright = document.querySelector('.footer-bottom p');
    if (footerCopyright) {
        const adminLink = footerCopyright.querySelector('a');
        const year = new Date().getFullYear();
        footerCopyright.innerHTML = `&copy; ${year} Softalyx. ${translation['footer_rights']} `;
        if (adminLink) {
            footerCopyright.appendChild(adminLink);
        }
    }
    
    // Update buttons and common text
    updateElementsByText('h3, h4', 'Contact Us', translation['contact_us']);
    updateElementsByText('button', 'Send Message', translation['send_message']);
    updateElementsByText('a, button', 'Learn More', translation['learn_more']);
    updateElementsByText('a, button', 'Discuss Project', translation['discuss_project']);
    updateElementsByText('a, button', 'Buy License', translation['buy_license']);
    
    // Update hero section if it exists
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        heroTitle.textContent = translation['hero_title'];
    }
    
    const heroSubtitle = document.querySelector('.hero .subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = translation['hero_subtitle'];
    }
    
    // Update section titles
    const whyChooseTitle = document.querySelector('.benefits .section-title h2');
    if (whyChooseTitle) {
        whyChooseTitle.textContent = translation['why_choose'];
    }
    
    const servicesTitle = document.querySelector('.services-preview .section-title h2');
    if (servicesTitle) {
        servicesTitle.textContent = translation['our_services'];
    }
    
    const servicesSubtitle = document.querySelector('.services-preview .section-title p');
    if (servicesSubtitle) {
        servicesSubtitle.textContent = translation['services_subtitle'];
    }
    
    const trustedByTitle = document.querySelector('.clients .section-title h2');
    if (trustedByTitle) {
        trustedByTitle.textContent = translation['trusted_by'];
    }
}

/**
 * Update elements by their text content
 */
function updateElementsByText(selector, originalText, newText) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        if (element.textContent.trim() === originalText) {
            element.textContent = newText;
        }
    });
}

/**
 * Update page-specific elements based on the current language
 */
function updatePageSpecificElements(lang) {
    console.log(`Language.js: Updating page-specific elements for language: ${lang}`);
    
    const translation = translations[lang] || translations['en'];
    
    // First, update all data-i18n elements that are not in the admin interface
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(`Language.js: Found ${elements.length} elements with data-i18n attribute`);
    
    // Update each element with the translation, but skip admin interface elements
    elements.forEach(element => {
        // Skip if this is an admin interface element (sidebar, headers, buttons)
        if (isAdminInterfaceElement(element)) {
            return;
        }

        const key = element.getAttribute('data-i18n');
        if (translation[key]) {
            element.textContent = translation[key];
            console.log(`Language.js: Updated element with key ${key} to "${translation[key]}"`);
        } else {
            console.warn(`Language.js: No translation found for key ${key}`);
        }
    });
    
    // Run a more thorough direct text match for all text elements
    function updateDirectTextMatches() {
        console.log('Language.js: Running direct text matching for untranslated elements');
        
        // Skip if we're in the admin interface
        if (window.location.pathname.includes('admin')) {
            console.log('Language.js: Skipping direct text matching in admin interface');
            return;
        }
        
        const currentLang = localStorage.getItem('language') || 'en';
        if (currentLang === 'en') {
            console.log('Language.js: Current language is English, skipping direct text matching');
            return;
        }
        
        const translation = translations[currentLang];
        
        // Create a reverse map for English translations
        const reverseMap = {};
        for (const key in translations['en']) {
            reverseMap[translations['en'][key]] = key;
        }
        
        // Specific texts that need direct replacement
        const specificTexts = {
            'Authorized Atlassian Partner': 'authorized_partner',
            'License Reselling': 'license_reselling',
            'Atlassian Outsourcing': 'atlassian_outsourcing',
            'Atlassian Training': 'atlassian_training',
            'Start Your Project': 'start_project',
            'Ready to Get Started?': 'ready_to_start',
            'Frequently Asked Questions': 'faq_title',
            'What are the steps to get a license?': 'license_steps',
            'The process is simple:': 'process_simple',
            'We provide you with an estimated discount based on your configuration (users, version, host type, etc.)': 'estimated_discount',
            'We make a contract with you': 'make_contract',
            'We provide you with a license from Atlassian': 'provide_license',
            'You pay us (post factum)': 'pay_postfactum',
            'What payment methods do you accept?': 'payment_methods',
            'Currently, we accept bank transfers. For enterprise clients, we can arrange custom payment terms.': 'bank_transfers',
            'How quickly can I get my license?': 'license_delivery',
            'Once the contract is signed, we can typically provide your license within 1-2 business days.': 'license_delivery_time',
            'How quickly can you respond to inquiries?': 'response_time',
            'We typically respond to all inquiries within 2 business days. For urgent matters, please call our support line directly or write to us on Telegram.': 'response_time_answer',
            'Do you offer on-call support for Atlassian products?': 'oncall_support',
            'Yes, we offer on-call support for critical issues with Atlassian products. Our support team is available 24/7 for clients with support contracts.': 'oncall_support_answer',
            'Can you help with migrating from Server to Cloud?': 'cloud_migration',
            'Absolutely! We specialize in Atlassian Server to Cloud migrations as well as Cloud to Cloud migrations and can help ensure a smooth transition with minimal disruption to your workflows.': 'cloud_migration_answer',
            'What payment methods do you accept for licenses?': 'payment_methods_licenses',
            'We accept bank transfers. For enterprise clients, we can also arrange custom payment terms.': 'payment_methods_licenses_answer',
            'Atlassian Products': 'atlassian_products',
            'Explore our comprehensive range of Atlassian products': 'explore_products',
            'Product': 'product',
            'Description': 'description',
            'Price': 'price',
            'Action': 'action',
            'Jira Software': 'jira_software',
            'Project and issue tracking for software teams': 'jira_desc',
            'Confluence': 'confluence',
            'Content collaboration for teams': 'confluence_desc',
            'Jira Service Management': 'jira_service',
            'Service desk and customer support solution': 'jira_service_desc',
            'Bitbucket': 'bitbucket',
            'Git code management for teams': 'bitbucket_desc',
            'Trello': 'trello',
            'Visual project management': 'trello_desc',
            'Negotiable': 'negotiable',
            'Request a Quote': 'request_quote',
            'This is not a complete list of available products. For the full range of Atlassian products, please visit <a href="https://www.atlassian.com/software" target="_blank">atlassian.com/software</a>. Contact us for a personalized quote.': 'products_note',
            'Volume discounts available': 'volume_discounts_available_short',
            'Free license migration assistance': 'free_migration',
            'Expert configuration support': 'expert_config',
            'Bank transfer payment option': 'bank_transfer',
            'Or call us at: ': 'or_call',
            'As an authorized Atlassian partner, we provide cost-effective licensing solutions with expert guidance and ongoing support.': 'authorized_partner_desc',
            'Volume Discounts': 'volume_discounts',
            'Competitive pricing with significant discounts for volume purchases across all Atlassian products.': 'volume_discounts_desc',
            'Auto-Renewal': 'auto_renewal',
            'Hassle-free license management with automatic renewal options to ensure business continuity.': 'auto_renewal_desc',
            'License Consultation': 'license_consultation',
            'Expert advice on selecting the right Atlassian products and license tiers for your specific needs.': 'license_consultation_desc',
            'Comprehensive training programs designed to help your team master Atlassian tools and maximize productivity.': 'training_desc_full',
            'Customized Workshops': 'customized_workshops',
            'Tailored training sessions focused on your team\'s specific needs and use cases.': 'customized_workshops_desc',
            'Hands-on Learning': 'hands_on_learning',
            'Practical exercises and real-world scenarios to ensure effective knowledge transfer.': 'hands_on_learning_desc',
            'Certification Preparation': 'certification_preparation',
            'Specialized training to help your team prepare for Atlassian certification exams with access to Atlassian accreditation resources.': 'certification_preparation_desc',
            'Tell us about your requirements and we\'ll get back to you with a tailored solution': 'tell_requirements',
            'As an authorized Atlassian Solutions Partner, Softalyx provides competitive pricing on the full range of Atlassian products. Our licensing experts will help you select the right products and tiers for your organization\'s needs, ensuring you get the best value for your investment.': 'partner_description',
            'Official Atlassian Partner': 'official_partner',
            'Volume Discounts Available': 'volume_discounts_available',
            'License Management Portal': 'license_management',
            'Expert Configuration Support': 'expert_support',
            'Get a Quote': 'step_quote',
            'We provide you with an estimated discount based on your configuration (users, version, host type, etc.)': 'step_quote_desc',
            'Sign Contract': 'step_contract',
            'We make a contract with you that outlines terms and conditions': 'step_contract_desc',
            'Receive License': 'step_license',
            'We provide you with a license directly from Atlassian': 'step_license_desc',
            'Post-Payment': 'step_payment',
            'You pay us after receiving your license (post factum)': 'step_payment_desc',
            
            // Ready to Get Started
            'get_started': 'Готові розпочати?',
            
            // License Management
            'license_tracking': 'Комплексне відстеження ліцензій',
            'license_tracking_desc': 'Ми обробляємо всю документацію щодо ліцензій та надаємо регулярні нагадування про продовження',
            'volume_discounts_desc_short': 'Отримайте кращі ставки при об\'ємних закупівлях всіх продуктів Atlassian',
            
            // Licensing Page Title
            'atlassian_licenses': 'Ліцензії Atlassian',
            'licensing_subtitle': 'Економічно вигідні рішення з ліцензування з експертним керівництвом і підтримкою',
            
            // Updated translation
            'quick_links': 'Швидкі посилання',
            'help_with_license': 'Отримайте допомогу з вибором ліцензії, встановленням та поточною конфігурацією',
            
            // Contact form
            'name': 'Ім\'я',
            'email': 'Електронна пошта',
            'phone': 'Телефон',
            'subject': 'Тема',
            'message': 'Повідомлення',
            'send': 'Надіслати повідомлення',
            'contact_success': 'Ваше повідомлення успішно надіслано. Ми зв\'яжемося з вами найближчим часом!',
            'data_consent': 'Я надаю згоду Softalyx на обробку моїх персональних даних з метою опрацювання мого запиту та зв\'язку зі мною.',
            // Contact information
            'visit_us': 'Відвідайте нас',
            'contact_form': 'Контактна форма',
            'your_name': 'Ваше ім\'я',
            'your_email': 'Ваша електронна пошта',
            'your_phone': 'Ваш телефон (опціонально)',
            'your_company': 'Ваша компанія (опціонально)',
            'your_message': 'Ваше повідомлення',
            'message_sent': 'Повідомлення надіслано!',
            'message_error': 'Помилка при надсиланні повідомлення',
            'address': 'Адреса',
            join_team: "Я хочу приєднатися до Softalyx",
            partnership_request: "Запит на партнерство з Softalyx"
        };
        
        // Process all text nodes in the document
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while (node = walker.nextNode()) {
            // Skip if parent is a script or style tag
            if (node.parentNode.tagName === 'SCRIPT' || node.parentNode.tagName === 'STYLE') {
                continue;
            }
            
            // Skip if this is part of the admin interface
            if (isAdminInterfaceElement(node.parentNode)) {
                continue;
            }
            
            const text = node.nodeValue.trim();
            if (text.length > 0) {
                // Check if this is a specific text we want to replace
                if (specificTexts[text]) {
                    const key = specificTexts[text];
                    if (translation[key]) {
                        node.nodeValue = node.nodeValue.replace(text, translation[key]);
                    }
                }
                // Check if we have a reverse mapping for this text
                else if (reverseMap[text]) {
                    const key = reverseMap[text];
                    if (translation[key]) {
                        node.nodeValue = node.nodeValue.replace(text, translation[key]);
                    }
                }
            }
        }
    }
    
    // Update navigation tabs and links (non-admin)
    const navLinks = document.querySelectorAll('nav a, .nav-link, .tab-link, .nav-menu a');
    console.log(`Language.js: Found ${navLinks.length} navigation links to translate`);
    
    navLinks.forEach(link => {
        // Skip admin interface elements
        if (isAdminInterfaceElement(link)) {
            return;
        }

        const text = link.textContent.trim();
        if (!text || text.includes('<')) return; // Skip if empty or contains HTML
        
        // Map common navigation item texts to keys
        const navTexts = {
            'Home': 'nav_home',
            'Services': 'nav_services', 
            'Licenses': 'nav_licenses',
            'Contact': 'nav_contact',
            'Главная': 'nav_home',
            'Послуги': 'nav_services',
            'Ліцензії': 'nav_licenses',
            'Контакти': 'nav_contact',
            'Услуги': 'nav_services',
            'Лицензии': 'nav_licenses',
            'Контакты': 'nav_contact'
        };
        
        // Use direct mapping if available
        const key = navTexts[text] || findTranslationKeyByValue('en', text);
        
        if (key && translation[key]) {
            console.log(`Language.js: Translating nav link "${text}" to "${translation[key]}"`);
            // If link has icon, preserve it
            const icon = link.querySelector('i');
            if (icon) {
                const iconHTML = icon.outerHTML;
                link.innerHTML = iconHTML + ' ' + translation[key];
            } else {
                link.textContent = translation[key];
            }
        }
    });
    
    // Check for specific pages by URL or class
    const currentUrl = window.location.pathname;
    const pageClass = document.body.className;
    
    console.log(`Language.js: Current URL: ${currentUrl}, Page class: ${pageClass}`);
    
    // Check if we're on the admin login page
    if (document.querySelector('.admin-login-container')) {
        console.log('Language.js: Detected admin login page');
        
        // We don't want to translate admin login elements as per requirements
        // But the login form content (user entered data) should be translated
    }
    
    // Check if we're on the admin dashboard
    if (document.querySelector('.admin-dashboard')) {
        console.log('Language.js: Detected admin dashboard page');
        
        // We'll translate only the user content within admin panels, not the interface
        // This will be handled by updating only non-interface elements
    }
    
    // Services page
    if (currentUrl.includes('services') || document.querySelector('.services-page') || document.querySelector('.services-section')) {
        console.log('Language.js: Detected services page');
        
        // Update page title
        updateElementsBySelector('h1, h2', 'Our Services', translation['our_services']);
        updateElementsBySelector('p.subtitle, p.description', 'Comprehensive Atlassian solutions for your business needs', translation['services_subtitle']);
        
        // Update service cards
        const serviceNames = ['outsourcing', 'licenses', 'training'];
        serviceNames.forEach(service => {
            updateElementsBySelector('.service-card h3, .service-item h3', translations['en'][service], translation[service]);
            updateElementsBySelector('.service-card p, .service-item p', translations['en'][`${service}_desc`], translation[`${service}_desc`]);
        });
        
        // Update buttons
        updateElementsBySelector('.btn, button', 'Learn More', translation['learn_more']);
    }
    
    // Licenses page
    if (currentUrl.includes('licenses') || document.querySelector('.licenses-page')) {
        console.log('Language.js: Detected licenses page');
        
        // Update page title and description
        updateElementsBySelector('h1, h2', 'Licenses', translation['licenses']);
        updateElementsBySelector('p.subtitle, p.description', 'Cost-effective Atlassian product licenses with volume discounts', translation['licenses_desc']);
        
        // Update buttons
        updateElementsBySelector('.btn, button', 'Buy License', translation['buy_license']);
        updateElementsBySelector('.btn, button', 'Learn More', translation['learn_more']);
    }
    
    // Contact page
    if (currentUrl.includes('contact') || document.querySelector('.contact-page')) {
        console.log('Language.js: Detected contact page');
        
        // Update page title
        updateElementsBySelector('h1, h2', 'Contact Us', translation['contact_us']);
        
        // Update form elements
        const formLabels = {
            'Name': 'name',
            'Email': 'email',
            'Phone': 'phone',
            'Subject': 'subject',
            'Message': 'message'
        };
        
        document.querySelectorAll('label').forEach(label => {
            // Skip admin interface elements
            if (isAdminInterfaceElement(label)) {
                return;
            }

            const text = label.textContent.trim();
            const key = formLabels[text];
            if (key && translation[key]) {
                label.textContent = translation[key];
            }
        });
        
        // Update send button
        updateElementsBySelector('button[type="submit"]', 'Send Message', translation['send_message']);
    }
    
    // Homepage
    if (currentUrl === '/' || currentUrl.endsWith('index.html') || document.querySelector('.hero-section')) {
        console.log('Language.js: Detected homepage');
        
        // Update hero section
        updateElementsBySelector('.hero-title, .hero h1', translations['en']['hero_title'], translation['hero_title']);
        updateElementsBySelector('.hero-subtitle, .hero .subtitle', translations['en']['hero_subtitle'], translation['hero_subtitle']);
        
        // Update buttons
        updateElementsBySelector('.hero-cta .btn-primary, .hero .btn-primary', 'Discuss Project', translation['discuss_project']);
        updateElementsBySelector('.hero-cta .btn-secondary, .hero .btn-secondary', 'Buy License', translation['buy_license']);
        
        // Update benefits section
        updateElementsBySelector('.benefits-section h2, .benefits h2', 'Why Choose Softalyx', translation['why_choose']);
        
        // Update benefit cards
        const benefitNames = ['certified_partner', 'agile_teams', 'flexible_pricing', 'seamless_migration'];
        benefitNames.forEach(benefit => {
            updateElementsBySelector('.benefit-card h3', translations['en'][benefit], translation[benefit]);
            updateElementsBySelector('.benefit-card p', translations['en'][`${benefit}_desc`], translation[`${benefit}_desc`]);
        });
        
        // Update clients section
        updateElementsBySelector('.clients-section h2, .clients h2', 'Trusted By', translation['trusted_by']);
    }
    
    // Run direct text matching for any untranslated elements
    updateDirectTextMatches();
    
    console.log('Language.js: Finished updating page-specific elements');
}

/**
 * Helper function to update elements by selector and original text
 */
function updateElementsBySelector(selector, originalText, newText) {
    if (!newText) return;
    
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        // Skip admin interface elements
        if (isAdminInterfaceElement(element)) {
            return;
        }

        const currentText = element.textContent.trim();
        if (currentText === originalText || currentText === newText) {
            element.textContent = newText;
            console.log(`Language.js: Updated "${originalText}" to "${newText}"`);
        }
    });
}

/**
 * Helper function to check if an element is part of the admin interface 
 * that should not be translated
 */
function isAdminInterfaceElement(element) {
    // Always return true for admin elements to prevent translation
    // Check if we're on an admin page
    const isAdminPage = window.location.href.includes('admin-');
    
    if (isAdminPage) {
        return true; // All elements on admin pages should remain in English
    }
    
    // Check for admin specific elements on other pages
    const adminClasses = ['admin-', 'dashboard-'];
    const adminIds = ['admin', 'dashboard'];
    
    // Check element and all its parents for admin-related attributes
    let currentEl = element;
    while (currentEl) {
        // Check for admin-related classes
        if (currentEl.classList) {
            for (const className of adminClasses) {
                if (currentEl.classList.toString().includes(className)) {
                    return true;
                }
            }
        }
        
        // Check for admin-related IDs
        if (currentEl.id) {
            for (const idName of adminIds) {
                if (currentEl.id.includes(idName)) {
                    return true;
                }
            }
        }
        
        // Move up the DOM tree
        currentEl = currentEl.parentElement;
    }
    
    return false;
}

/**
 * Save custom translations to localStorage
 */
function saveCustomTranslations() {
    localStorage.setItem('customTranslations', JSON.stringify(customTranslations));
}

/**
 * Add or update a custom translation
 */
function updateCustomTranslation(lang, key, value) {
    if (!customTranslations[lang]) {
        customTranslations[lang] = {};
    }
    
    customTranslations[lang][key] = value;
    
    // Update the translations object
    if (!translations[lang]) {
        translations[lang] = {};
    }
    
    translations[lang][key] = value;
    
    // Save to localStorage
    saveCustomTranslations();
}

/**
 * Get all translations for a specific language
 */
function getTranslations(lang) {
    return translations[lang] || {};
}

/**
 * Find a translation key by its value in a specific language
 */
function findTranslationKeyByValue(lang, value) {
    const langTranslations = translations[lang] || {};
    
    for (const [key, translationValue] of Object.entries(langTranslations)) {
        if (translationValue === value) {
            return key;
        }
    }
    
    return null;
}

/**
 * Load Translations for a Language
 */
// Removing duplicate function since it's already defined in admin.js 