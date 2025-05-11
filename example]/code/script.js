document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded and DOMContentLoaded");

    // --- Element Selectors ---
    const appContainer = document.querySelector('.app-container');
    const loginPage = document.getElementById('login-page');
    const forgotPasswordPage = document.getElementById('forgot-password-page');
    const signupPage = document.getElementById('signup-page'); // New
    const mainAppContent = document.getElementById('main-app-content');
    const loadingScreen = document.getElementById('loading-screen');

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const loginBtn = document.getElementById('login-btn');
    const loginToggleBtn = document.getElementById('login-toggle-btn'); // On Login Page
    const signupToggleBtn = document.getElementById('signup-toggle-btn'); // On Login Page
    const forgotPasswordLink = document.querySelector('.forgot-password');

    const forgotEmailInput = document.getElementById('forgot-email');
    const sendResetLinkBtn = document.getElementById('send-reset-link-btn');
    const backToLoginBtn = document.getElementById('back-to-login-btn');

    // Sign Up Page Elements
    const loginToggleBtnSignup = document.getElementById('login-toggle-btn-signup'); // On Signup Page
    const signupToggleBtnSignup = document.getElementById('signup-toggle-btn-signup'); // On Signup Page
    const fullNameSignupInput = document.getElementById('full-name-signup');
    const emailSignupInput = document.getElementById('email-signup');
    const passwordSignupInput = document.getElementById('password-signup');
    const togglePasswordSignupBtn = document.getElementById('togglePasswordSignup');
    const confirmPasswordSignupInput = document.getElementById('confirm-password-signup');
    const toggleConfirmPasswordSignupBtn = document.getElementById('toggleConfirmPasswordSignup');
    const createAccountBtn = document.getElementById('create-account-btn');


    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('overlay');
    const headerTitle = document.getElementById('header-title');
    const headerActions = document.getElementById('header-actions');

    const bottomNavItems = document.querySelectorAll('.bottom-nav .nav-item');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    const searchQuotesInput = document.getElementById('search-quotes');
    const quotesContainer = document.getElementById('quotes-container');

    const profilePicDisplay = document.getElementById('profile-pic-display');
    const profileNameDisplay = document.getElementById('profile-name-display');
    const profileSubtitleDisplay = document.getElementById('profile-subtitle-display');
    const profileBadgesDisplay = document.getElementById('profile-badges-display');
    const profileAboutMeDisplay = document.getElementById('profile-about-me-display');

    const editProfilePicDisplay = document.getElementById('profile-pic-edit-display');
    const editProfileNameInput = document.getElementById('edit-profile-name');
    const editProfileSubtitleInput = document.getElementById('edit-profile-subtitle');
    const editProfileBadgesContainer = document.getElementById('edit-profile-badges');
    const editProfileAboutMeTextarea = document.getElementById('edit-profile-about-me');

    const chatPage = document.getElementById('chat-page');
    const chatWindow = document.getElementById('chat-window');
    const chatMessageInput = document.getElementById('chat-message-input');
    const sendChatBtn = document.getElementById('send-chat-btn');

    const categoryPageEl = document.getElementById('category-page');
    const categoryTabsContainer = categoryPageEl ? categoryPageEl.querySelector('.category-tabs') : null;
    const categoryContentArea = document.getElementById('category-content-area');
    const categoryMenuList = document.getElementById('category-menu-list');

    const settingsPage = document.getElementById('settings-page');
    const settingsItems = settingsPage ? settingsPage.querySelectorAll('.settings-item[data-page]') : [];
    const logoutMenuBtn = document.getElementById('logout-menu-btn');
    const logoutSettingsBtn = document.getElementById('logout-settings-btn');

    const accountProfileNameInput = document.getElementById('account-profile-name');
    const accountProfileSubtitleInput = document.getElementById('account-profile-subtitle');
    const accountProfileAboutTextarea = document.getElementById('account-profile-about');
    const accountEmailDisplay = document.getElementById('account-email-display');
    const saveAccountProfileBtn = document.getElementById('save-account-profile-btn');
    const changePasswordBtn = document.getElementById('change-password-btn');
    const deactivateAccountBtn = document.getElementById('deactivate-account-btn');

    let currentPageId = 'login-page';
    let previousPageId = 'login-page';

    let currentProfileData = {
        name: "Blossom Powerpuff",
        subtitle: "Leading with strength and smarts!",
        about: "Commander and leader. Self-proclaimed leader of the Powerpuff Girls.",
        badges: ["Gender", "Age"],
        initials: "BP",
        email: "blossom@powerpuff.com"
    };

    const allBadges = ["Gender", "Religious", "Disability", "Age", "Sexual Orientation", "Appearance-Based"];
    const badgeColors = {
        "Gender": "gender", "Religious": "religious", "Disability": "disability",
        "Age": "age", "Sexual Orientation": "sexual-orientation", "Appearance-Based": "appearance-based"
    };
    const mainPages = ['home-page', 'profile-page', 'chat-page', 'settings-page'];


const quotesData = [
    { text: "Our ability to reach unity in diversity will be the beauty and the test of our civilization.", author: "Mahatma Gandhi" },
    { text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", author: "Martin Luther King Jr." },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "An unexamined life is not worth living.", author: "Socrates" },
    { text: "Be kind, for everyone you meet is fighting a hard battle.", author: "Plato" },
    { text: "Diversity is not about how we differ. Diversity is about embracing one another's uniqueness.", author: "Ola Joseph" },
    { text: "Injustice anywhere is a threat to justice everywhere.", author: "Martin Luther King Jr." },
    { text: "No one is born hating another person because of the color of his skin, or his background, or his religion. People must learn to hate, and if they can learn to hate, they can be taught to love, for love comes more naturally to the human heart than its opposite.", author: "Nelson Mandela" },
    { text: "The highest result of education is tolerance.", author: "Helen Keller" },
    { text: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr." },
    { text: "Diversity: the art of thinking independently together.", author: "Malcolm Forbes" },
    { text: "We may have all come on different ships, but we're in the same boat now.", author: "Martin Luther King Jr." },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", author: "Albert Camus" },
    { text: "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.", author: "Maya Angelou" },

    { text: "We all should know that diversity makes for a rich tapestry, and we must understand that all the threads of the tapestry are equal in value no matter their color.", author: "Maya Angelou" },
    { text: "Strength lies in differences, not in similarities.", author: "Stephen R. Covey" },
    { text: "It is time for parents to teach young people early on that in diversity there is beauty and there is strength.", author: "Maya Angelou" },
    { text: "Tolerance implies no lack of commitment to one's own beliefs. Rather it condemns the oppression or persecution of others.", author: "John F. Kennedy" },
    { text: "We are all different, which is great because we are all unique. Without diversity life would be very boring.", author: "Catherine Pulsifer" },
    { text: "I do not want my house to be walled in on all sides and my windows to be stuffed. I want the cultures of all the lands to be blown about my house as freely as possible.", author: "Mahatma Gandhi" },
    { text: "In diversity there is beauty and there is strength.", author: "Maya Angelou" },
    { text: "Our ability to embrace diversity and work together determines the strength of our society.", author: "Barack Obama" }
];


    const categoryData = {
        "gender": {
            id: "gender",
            label: "Gender",
            tabs: {
                impact: "Gender discrimination results in unequal opportunities in employment, education, pay, and can lead to violence and harassment. It affects mental health, limits career progression, and creates economic vulnerability, particularly for women and gender minorities.",
               solutions: "Solutions include promoting gender equality through comprehensive education from a young age, actively challenging stereotypes in media and daily interactions, implementing and rigorously enforcing strong anti-discrimination laws, ensuring pay equity, supporting organizations advocating for gender rights, and fostering inclusive leadership that reflects gender diversity.",
               problems: "Deep-rooted societal norms, patriarchal systems, lack of awareness about nuanced gender issues, insufficient legal protection or poor enforcement mechanisms, significant underrepresentation of women and gender diverse individuals in decision-making roles, and pervasive media stereotypes all contribute to ongoing gender discrimination.",
               laws: "Key legislation includes national laws promoting women's rights (e.g., Magna Carta of Women), anti-sexual harassment acts for workplaces and educational settings, and provisions against gender-based discrimination in employment. International conventions like CEDAW (Convention on the Elimination of All Forms of Discrimination Against Women) provide a global framework.",
            },
            questions: [
               { id: 'gq1', text: "Do you consciously try to use gender-neutral language (e.g., 'everyone,' 'folks,' 'team') when addressing mixed groups?", feedbackYes: "Excellent! Inclusive language makes everyone feel valued. Continue being mindful of pronouns too.", feedbackNo: "It's a good habit to start. Using terms like 'people' or 'team' instead of 'guys' for mixed groups makes a difference. Give it a try!" },
               { id: 'gq2', text: "Have you ever assumed someone's profession or role based on their gender (e.g., assuming a woman in a meeting is the note-taker)?", feedbackYes: "Self-awareness is key. We all have biases. Actively questioning these helps us see people for their skills, not gender stereotypes.", feedbackNo: "That's great! Maintaining an objective view of capabilities, irrespective of gender, promotes fairness." },
               { id: 'gq3', text: "Do you believe that expressing a wide range of emotions is equally acceptable for all genders in society?", feedbackYes: "Absolutely. Societal norms often unfairly restrict emotional expression. Advocating for everyone's emotional freedom is vital.", feedbackNo: "It's worth reflecting on societal expectations. All individuals experience a full spectrum of emotions, and healthy expression is important for well-being." },
               { id: 'gq4', text: "Have you ever challenged a sexist joke or comment, even if it felt uncomfortable?", feedbackYes: "That takes courage and truly helps shape a more respectful environment. Your actions challenge harmful norms.", feedbackNo: "It can be tough. Even simple phrases like 'I don't find that funny' or asking for clarification can be powerful. Consider preparing a response for future situations." },
               { id: 'gq5', text: "Do you actively seek out and consume media (books, movies, news) created by and featuring a diverse range of gender identities and perspectives?", feedbackYes: "Fantastic! Broadening your media intake enriches understanding and counters stereotypes. Keep exploring!", feedbackNo: "This is a great way to gain new insights. Try looking for recommendations from different communities or exploring diverse creators." },
               { id: 'gq6', text: "In group discussions, do you make an effort to ensure all gender voices are heard and valued equally?", feedbackYes: "Excellent! Creating space for everyone to contribute fosters better collaboration and diverse ideas.", feedbackNo: "It's a valuable skill. Actively inviting contributions or gently redirecting conversations if one gender dominates can make discussions more equitable." },
               { id: 'gq7', text: "Do you think gender stereotypes influence children's toy choices, and do you try to offer diverse options?", feedbackYes: "Very insightful! Offering a wide range of toys allows children to explore interests freely, unhindered by gendered expectations.", feedbackNo: "It's something to consider. Children benefit from all types of play. Encouraging diverse toy choices helps break down early stereotypes." },
               { id: 'gq8', text: "Have you reflected on how traditional gender roles might limit men (e.g., pressure to be stoic, primary breadwinner)?", feedbackYes: "Important reflection. Gender equality benefits everyone by freeing individuals from restrictive roles.", feedbackNo: "Gender stereotypes can negatively impact men too, limiting emotional expression or life choices. Considering this broadens the understanding of gender equality." },
               { id: 'gq9', text: "Do you support businesses or initiatives that actively promote gender equality or support marginalized genders?", feedbackYes: "Your support matters! Where you spend your money or time can be a powerful way to advocate for change.", feedbackNo: "This is one way to make a difference. Researching and supporting organizations committed to gender equality can amplify positive impact." },
               { id: 'gq10', text: "Do you believe it's important to learn about the experiences of transgender and non-binary individuals from their own perspectives?", feedbackYes: "Absolutely. Listening to and learning from trans and non-binary voices is crucial for understanding and being a true ally.", feedbackNo: "Seeking out and respectfully engaging with resources created by transgender and non-binary people is key to understanding their realities." }
             ]
        },
        "religious": {
            id: 'religious',
            label: 'Religious',
            tabs: {
               impact: "Religious discrimination can lead to social exclusion, denial of services, hate crimes, restrictions on practicing faith, and psychological distress. It creates an environment of fear and can hinder individuals' full participation in society.",
               solutions: "Promoting interfaith dialogue and education to foster mutual respect and understanding, ensuring freedom of religion in law and practice, actively protecting places of worship and religious minorities, and challenging religious intolerance and stereotypes in media and public discourse.",
               problems: "Religious intolerance, extremism, misinformation and stereotypes about different faiths, laws that favor one religion or restrict practices, societal pressure to conform, and the misuse of religious texts to justify discrimination are major problems.",
               laws: "Constitutional guarantees of religious freedom, laws against hate speech and crimes targeting religious groups, and international human rights laws protecting freedom of thought, conscience, and religion form the legal basis for combating religious discrimination.",
            },
            questions: [
                { id: 'rq1', text: "Have you ever made an assumption about someone's beliefs or practices based on their religious attire or symbols?", feedbackYes: "It's a common shortcut. Being aware helps us remember symbols don't tell the whole story of one's faith or character.", feedbackNo: "That shows respect for individual diversity. Judging people on character, not external markers, is key to fairness." },
            ]
        },
        "disability": {
            id: "disability",
            label: "Disability",
            tabs: {
                impact: "<p>Discrimination against individuals with disabilities leads to exclusion from employment, education, social activities, and inaccessible environments, severely limiting opportunities and independence.</p>",
                solutions: "<p>Enforce accessibility laws (e.g., ADA), promote universal design, challenge ableist attitudes, ensure inclusive education and employment practices, and support disability advocacy groups.</p>",
                problems: "<p>Physical barriers, lack of accommodations, societal stigma and misconceptions, insufficient legal protections or enforcement, and underestimation of capabilities are significant problems.</p>",
                laws: "<p>Laws like the Americans with Disabilities Act (ADA) in the US, and similar legislation in other countries, aim to prohibit discrimination and ensure equal opportunity for people with disabilities.</p>"
            },
            questions: [
                { id: 'rq1', text: "Have you ever made an assumption about someone's beliefs or practices based on their religious attire or symbols?", feedbackYes: "It's a common shortcut. Being aware helps us remember symbols don't tell the whole story of one's faith or character.", feedbackNo: "That shows respect for individual diversity. Judging people on character, not external markers, is key to fairness." },
               { id: 'rq2', text: "Do you feel you have a good understanding of the basic tenets of major religions different from your own (if any)?", feedbackYes: "Knowledge fosters understanding and breaks down stereotypes. Continue to learn and engage respectfully.", feedbackNo: "Exploring other faiths (or non-faith views) can be enriching and build bridges. Many resources are available." },
               { id: 'rq3', text: "Have you witnessed a situation where someone was mocked or excluded because of their religious beliefs or lack thereof?", feedbackYes: "Witnessing such acts can be distressing. Consider safe ways to offer support or challenge the behavior if appropriate.", feedbackNo: "It's important to remain vigilant. Creating environments where all beliefs are respected is a collective effort." },
               { id: 'rq4', text: "Are you comfortable discussing religious or spiritual topics respectfully with people of different faiths or no faith?", feedbackYes: "That's a valuable skill for fostering understanding and connection across diverse belief systems.", feedbackNo: "Practice active listening and focusing on shared values rather than differences can make these conversations more comfortable and productive." },
               { id: 'rq5', text: "Have you ever felt that media portrayals of certain religions are often stereotypical or negative?", feedbackYes: "Media literacy is important. Critically analyzing portrayals and seeking diverse sources helps form a balanced view.", feedbackNo: "It's good to be observant. Media can significantly shape perceptions, so diverse representation matters." },
               { id: 'rq6', text: "Do you think public holidays and school calendars in your region adequately accommodate diverse religious observances?", feedbackYes: "Inclusivity in public scheduling is a sign of a respectful society. Advocating for it can be important.", feedbackNo: "This is an area where systemic inclusion can be improved. Awareness of diverse needs is the first step." },
               { id: 'rq7', text: "Have you ever hesitated to express your own religious/spiritual beliefs (or lack thereof) for fear of judgment?", feedbackYes: "Many feel this way. Finding safe spaces and like-minded individuals can be helpful. Your beliefs are valid.", feedbackNo: "Feeling free to express one's beliefs (or lack thereof) without fear is a right. Help create that space for others." },
               { id: 'rq8', text: "What steps can be taken in your community to foster better understanding and respect between different religious or belief groups?", feedbackYes: "Interfaith events, educational workshops, and shared community projects can build bridges. Your ideas are valuable!", feedbackNo: "Consider starting small – perhaps by learning about a different local faith community or attending an open event." },
               { id: 'rq9', text: "Have you seen instances where religious texts or beliefs were used to justify discrimination or harm against a particular group?", feedbackYes: "It's crucial to differentiate between faith traditions and interpretations used to justify harm. Critical thinking is key.", feedbackNo: "Understanding that interpretations vary is important. Most faith traditions emphasize compassion and justice at their core." },
               { id: 'rq10', text: "How can one respectfully disagree with a religious viewpoint without disrespecting the person holding it or their right to believe?", feedbackYes: "Focus on the idea, not the person. Use 'I' statements, listen actively, and seek common ground where possible.", feedbackNo: "This is a vital skill. It involves separating the belief from the individual and engaging with civility and respect for their humanity." },
            ]
        },
        "age": {
            id: 'age',
            label: 'Age',
            tabs: {
               impact: "Ageism impacts individuals across the lifespan, leading to stereotypes, prejudice, and discrimination in employment, healthcare, social inclusion, and mediarepresentation. It can affect financial stability, career opportunities, and overall well-being.",
               solutions: "Solutions involve challenging ageist stereotypes, promoting intergenerational connections and programs, enforcing laws against age discrimination, encouraging lifelong learning, and valuing the contributions of all age groups.",
               problems: "Pervasive stereotypes about capabilities based on age, lack of awareness of ageism's impact, discriminatory workplace policies, and societal pressure for older individuals to 'step aside' or younger individuals to 'wait their turn.'",
               laws: "Laws like the Age Discrimination in Employment Act (ADEA) in the US protect older workers. However, legal protections against ageism for younger people are less common, and enforcement can be challenging.",
            },
            questions: [
               { id: 'agq1', text: "Do you find yourself thinking older people are 'out of touch' or younger people 'lack experience' based solely on age?", feedbackYes: "Age-based stereotypes are common. Reflecting on these helps us see individuals for their unique skills.", feedbackNo: "That's a great mindset! Valuing diverse experiences across all age groups enriches our communities." },
               { id: 'agq2', text: "Have you ever dismissed someone's opinion or ability due to their perceived age?", feedbackYes: "It's easy to do unconsciously. Focusing on the merit of ideas, regardless of age, leads to better outcomes.", feedbackNo: "Excellent. Judging ideas and contributions on their own merit is key to fairness." },
               { id: 'agq3', text: "Have you witnessed older individuals being patronized, or younger individuals not taken seriously?", feedbackYes: "These are common forms of ageism. Speaking up or creating space for all voices is important.", feedbackNo: "Being an advocate for respectful treatment for all ages is valuable." },
               { id: 'agq4', text: "Do you notice age-related stereotypes in advertising, entertainment, or news media?", feedbackYes: "Media often perpetuates age stereotypes. Being a critical consumer helps challenge these narratives.", feedbackNo: "It's good to be aware. Media representation plays a big role in shaping societal views on aging." },
               { id: 'agq5', text: "Have you felt job opportunities or responsibilities were unfairly influenced by your age or a colleague's?", feedbackYes: "Age discrimination in employment is a serious issue. Understanding your rights and advocating for fair practices is important.", feedbackNo: "Workplace fairness, regardless of age, benefits everyone. Supporting age-inclusive policies is key." },
               { id: 'agq6', text: "Are there activities or roles you automatically associate with a specific age group?", feedbackYes: "Many societal norms are age-graded. Questioning these can open up possibilities for everyone.", feedbackNo: "Challenging age-based limitations allows for greater individual freedom and societal contribution." },
               { id: 'agq7', text: "How can different generations better collaborate and learn from each other?", feedbackYes: "Mentorship (both ways!), shared projects, and open dialogue can bridge generational gaps effectively.", feedbackNo: "Creating opportunities for intergenerational interaction fosters mutual respect and learning." },
               { id: 'agq8', text: "What are the benefits of having intergenerational friendships or mentorships?", feedbackYes: "They offer diverse perspectives, shared wisdom, and can reduce age-related isolation.", feedbackNo: "These relationships are incredibly enriching and help break down societal age barriers." },
               { id: 'agq9', text: "Have you used age-related terms (e.g., 'boomer,' 'millennial,' 'kid') in a dismissive way?", feedbackYes: "Labels can oversimplify and perpetuate stereotypes. Focusing on individuals is more constructive.", feedbackNo: "Using respectful language for all age groups fosters a more positive environment." },
               { id: 'agq10', text: "What unique strengths do both younger and older individuals bring to a team or society?", feedbackYes: "Younger people may bring new tech skills and fresh perspectives; older people often bring experience and institutional knowledge. Both are vital.", feedbackNo: "Recognizing and leveraging the diverse strengths of all age groups leads to stronger, more innovative outcomes." },
            ]
        },
        "sexual_orientation": {
            id: 'sexual_orientation',
            label: 'Sexual Orientation',
            tabs: {
                impact: "Discrimination based on SOGIE (Sexual Orientation, Gender Identity, and Expression) leads to harassment, violence, denial of rights in employment, housing, healthcare, and social exclusion, causing significant mental health tolls.",
               solutions: "Enacting comprehensive SOGIE equality laws, promoting LGBTQ+ inclusion in all sectors, providing education and sensitivity training, supporting LGBTQ+ advocacy, ensuring access to affirming healthcare, and challenging all forms of homo/bi/transphobia.",
               problems: "Lack of legal protections, strong societal stigma and prejudice, religiously or culturally justified discrimination, high rates of violence and hate crimes, and barriers to essential services.",
               laws: "While not universal, some jurisdictions have specific laws protecting against SOGIE-based discrimination. International human rights bodies increasingly affirm these rights. Advocacy for comprehensive SOGIE Equality Laws continues globally.",
            },
            questions: [
               { id: 'soq1', text: "Have you ever assumed someone's sexual orientation or gender identity based on their appearance or mannerisms?", feedbackYes: "It's easy to fall into stereotypes. Remembering SOGIE is diverse and personal helps us respect individual identities.", feedbackNo: "That's fantastic. Letting people self-identify and respecting their stated identity is fundamental." },
               { id: 'soq2', text: "Do you use inclusive language for relationships and families (e.g., 'partner' if unsure)?", feedbackYes: "Great! Inclusive language validates all relationships and family structures.", feedbackNo: "Using terms like 'partner' or 'spouse' instead of assuming 'husband/wife' is a simple way to be more inclusive." },
               { id: 'soq3', text: "Have you witnessed homo/bi/transphobic jokes or comments and stayed silent?", feedbackYes: "It's tough, but silence can be perceived as agreement. Consider safe ways to speak out or offer support.", feedbackNo: "Being an active ally involves challenging such remarks when it's safe to do so. Your voice matters." },
               { id: 'soq4', text: "Are you familiar with the differences between sexual orientation, gender identity, and gender expression?", feedbackYes: "Understanding these distinct concepts is crucial for respectful and informed allyship.", feedbackNo: "Taking a moment to learn these distinctions can greatly improve your understanding and support for the LGBTQ+ community." },
               { id: 'soq5', text: "Do you believe LGBTQ+ history and experiences should be included in education?", feedbackYes: "Inclusive education helps create affirming environments and provides important historical context for all students.", feedbackNo: "Learning about LGBTQ+ history and contributions enriches our understanding of society and human rights." },
               { id: 'soq6', text: "Have you felt uncomfortable with public displays of affection by same-sex couples or non-conforming gender expressions?", feedbackYes: "Reflecting on why this might be can reveal unconscious biases. Equal acceptance for all forms of respectful affection is key.", feedbackNo: "That's a sign of an open and accepting mindset. Normalizing love and identity in all its forms is important." },
               { id: 'soq7', text: "How can you be a better, more active ally to LGBTQ+ individuals?", feedbackYes: "Listening, learning, speaking up against discrimination, and respecting pronouns/identities are all vital actions.", feedbackNo: "Start by educating yourself on LGBTQ+ issues, listen to LGBTQ+ voices, and challenge your own assumptions." },
               { id: 'soq8', text: "Are you aware of local or national organizations supporting LGBTQ+ rights and well-being?", feedbackYes: "Supporting these organizations, even by sharing their work, can make a difference.", feedbackNo: "A quick search can reveal many groups doing important work. Learning about them is a good first step." },
               { id: 'soq9', text: "What are common misconceptions about bisexuality, pansexuality, or asexuality?", feedbackYes: "Challenging these misconceptions helps validate diverse identities within the LGBTQ+ spectrum.", feedbackNo: "Educating yourself about the diversity within the LGBTQ+ community helps combat biphobia, panphobia, and acephobia." },
               { id: 'soq10', text: "Why are inclusive policies (e.g., gender-neutral restrooms, non-discrimination clauses) important in workplaces and schools?", feedbackYes: "They create safer, more affirming environments where everyone can thrive and be themselves.", feedbackNo: "Inclusive policies signal respect and safety, allowing all individuals to participate fully without fear of discrimination." },
            ]
        },
        "appearance_based": {
            id: "appearance_based",
            label: "Appearance-Based",
            tabs: {
                impact: "Appearance-based discrimination ('lookism') affects hiring, promotions, social interactions, and self-esteem, based on factors like weight, height, attractiveness, style, or skin conditions. It's often subtle but damaging.",
               solutions: "Promoting diversity and inclusion beyond conventional beauty standards, media literacy to critique appearance portrayals, focusing on skills and character in evaluations, and fostering a culture of respect for all appearances.",
               problems: "Societal obsession with narrow beauty ideals, unconscious biases, lack of awareness of 'lookism' as a form of prejudice, and limited direct legal recourse unless tied to another protected characteristic.",
               laws: "Direct legal protections are rare. However, if appearance standards disproportionately affect a protected group (e.g., race, gender, religion via dress codes), existing anti-discrimination laws might apply. Some localities have limited protections (e.g., for weight/height).",
            },
            questions: [
               { id: 'apq1', text: "Do you find yourself making quick judgments about people based on their clothing, hairstyle, or body size?", feedbackYes: "Societal pressures often lead to these judgments. Shifting focus to character and actions over initial appearance leads to fairer assessments.", feedbackNo: "That's a valuable perspective. Championing inner worth over external appearance helps create a more accepting environment." },
               { id: 'apq2', text: "Have you ever commented, even to yourself, on someone's weight or attractiveness in a way that might be judgmental?", feedbackYes: "It's a common habit conditioned by society. Being mindful can help us appreciate diversity and reduce objectification.", feedbackNo: "Maintaining respect for diverse body types and appearances is key to combating lookism." },
               { id: 'apq3', text: "Do you think media and advertising often promote an overly narrow or unrealistic standard of beauty?", feedbackYes: "Critically analyzing these messages is important. Supporting media with diverse representation helps change the narrative.", feedbackNo: "Being aware of media influence is good. These standards can negatively impact self-esteem for many." },
               { id: 'apq4', text: "Have you ever felt pressure to change your appearance to fit in or be accepted (professionally or socially)?", feedbackYes: "Many experience this. It's important to value your authentic self. Advocating for acceptance of diverse appearances is needed.", feedbackNo: "That's fortunate. Supporting environments where people aren't judged on conformity to appearance norms is valuable." },
               { id: 'apq5', text: "Do you believe people are sometimes treated differently based on how conventionally 'attractive' they are perceived?", feedbackYes: "This 'beauty bias' is real and unfair. Focusing on qualifications, skills, and character promotes equity.", feedbackNo: "Awareness of this bias is important, even if you strive to avoid it. It's a systemic issue." },
               { id: 'apq6', text: "Have you ever complimented someone primarily on their appearance, potentially overlooking other qualities?", feedbackYes: "While compliments can be nice, balancing them with appreciation for skills or character is more holistic.", feedbackNo: "Recognizing a person's multifaceted value beyond just appearance is a sign of deep respect." },
               { id: 'apq7', text: "How do societal beauty standards differ across cultures and time, and what does this tell us?", feedbackYes: "This shows that beauty standards are social constructs, not objective truths. It helps deconstruct their power.", feedbackNo: "Understanding the fluid and constructed nature of beauty ideals can free us from their limitations." },
               { id: 'apq8', text: "What's the difference between appreciating someone's appearance and objectifying them?", feedbackYes: "Appreciation respects the whole person; objectification reduces them to their physical attributes for another's gaze or use.", feedbackNo: "Maintaining this distinction is crucial for respectful interactions and combating harmful societal tendencies." },
               { id: 'apq9', text: "How can we promote a culture that values people for character and abilities more than physical appearance?", feedbackYes: "By highlighting diverse role models, challenging appearance-based jokes, and focusing on substance in our interactions.", feedbackNo: "Leading by example in your own interactions and evaluations is a powerful way to shift focus." },
               { id: 'apq10', text: "What is one thing you admire about your own appearance that isn't tied to conventional beauty standards?", feedbackYes: "Self-acceptance and appreciating your unique features is a powerful act against narrow beauty ideals!", feedbackNo: "This is a great reflection point. Everyone has unique beauty. Embracing it builds confidence and challenges norms." },
            ]
        }
    };

    function showPage(pageId, title, isSubPage = false) {
        console.log(`Navigating to: ${pageId}, Title: ${title}, IsSubPage: ${isSubPage}, Prev: ${previousPageId}`);
        const allAppPages = appContainer.querySelectorAll('.page');

        allAppPages.forEach(p => p.classList.add('hidden'));

        const targetPage = document.getElementById(pageId);

        // Updated condition to include signup-page
        if (pageId === 'login-page' || pageId === 'forgot-password-page' || pageId === 'loading-screen' || pageId === 'signup-page') {
            if (mainAppContent) mainAppContent.classList.add('hidden');
            if (targetPage) {
                targetPage.classList.remove('hidden');
                if (pageId === 'loading-screen') targetPage.style.display = 'flex';
                else if (pageId !== 'loading-screen' && targetPage.style.display === 'flex') targetPage.style.display = ''; // Reset display for other auth pages
            }
             // Manage active state of toggle buttons
            if (pageId === 'login-page') {
                if (loginToggleBtn) loginToggleBtn.classList.add('active');
                if (signupToggleBtn) signupToggleBtn.classList.remove('active');
                // Ensure signup page toggles reflect this if they were visible (though they shouldn't be)
                if (loginToggleBtnSignup) loginToggleBtnSignup.classList.add('active');
                if (signupToggleBtnSignup) signupToggleBtnSignup.classList.remove('active');
            } else if (pageId === 'signup-page') {
                if (loginToggleBtn) loginToggleBtn.classList.remove('active');
                if (signupToggleBtn) signupToggleBtn.classList.add('active');
                // Activate correct toggles on the signup page itself
                if (loginToggleBtnSignup) loginToggleBtnSignup.classList.remove('active');
                if (signupToggleBtnSignup) signupToggleBtnSignup.classList.add('active');
            }

        } else { // For main app pages
            if (mainAppContent) mainAppContent.classList.remove('hidden');
            if (targetPage) targetPage.classList.remove('hidden');

            if (pageId === 'home-page') {
                if (quotesContainer) renderQuotes();
                slideIndexGlobal = 1;
                displaySlide(slideIndexGlobal);
                clearTimeout(slideshowTimeoutGlobal);
                slideshowTimeoutGlobal = setTimeout(autoAdvanceSlides, SLIDESHOW_INTERVAL);
            } else {
                if (currentPageId === 'home-page') { // If navigating away from home
                    clearTimeout(slideshowTimeoutGlobal);
                }
            }
            updateHeader(title || targetPage.dataset.title || 'App', isSubPage, pageId);
            updateActiveBottomNav(pageId);

            if (pageId === 'profile-page' && profilePicDisplay) loadProfileData();
            if (pageId === 'account-sub-page' && accountProfileNameInput) loadAccountPageData();
            if (pageId === 'edit-profile-page' && editProfileNameInput) loadMainEditProfileData();
        }

        if (pageId !== currentPageId) {
            previousPageId = currentPageId;
        }
        currentPageId = pageId;

        if (sideMenu && sideMenu.classList.contains('open')) {
             if (pageId !== 'category-page' && pageId !== 'about-app-page' && !mainPages.includes(pageId) && !pageId.endsWith('-sub-page')) {
                sideMenu.classList.remove('open');
                if (overlay) overlay.classList.add('hidden');
             }
        }
    }


    function updateHeader(title, isSubPage, currentViewingPageId) {
        if (!headerTitle || !menuBtn || !headerActions) {
            console.error("Header elements not found!");
            return;
        }
        headerTitle.textContent = title;
        headerActions.innerHTML = '';

        const mainAppHeader = document.querySelector('#main-app-content > header');
        if (!mainAppHeader) return;

        const existingBackBtn = mainAppHeader.querySelector('.icon-btn.back-btn');
        if (existingBackBtn) existingBackBtn.remove();

        const isCurrentlyOnMainAppPage = mainPages.includes(currentViewingPageId);

        if (isSubPage || !isCurrentlyOnMainAppPage) {
            menuBtn.style.display = 'none';
            const backBtn = document.createElement('button');
            backBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
            backBtn.className = 'icon-btn back-btn';
            backBtn.onclick = () => {
                let targetBackPage = 'home-page';
                let targetBackTitle = 'Home';

                if (currentViewingPageId === 'edit-profile-page') {
                    targetBackPage = 'profile-page';
                    targetBackTitle = 'Profile';
                } else if (currentViewingPageId.endsWith('-sub-page') &&
                           currentViewingPageId !== 'about-app-page' &&
                           !currentViewingPageId.startsWith('category')) {
                    targetBackPage = 'settings-page';
                    targetBackTitle = 'Settings';
                } else if (currentViewingPageId === 'category-page' || currentViewingPageId === 'about-app-page') {
                    if (previousPageId && mainPages.includes(previousPageId) && previousPageId !== 'login-page' && previousPageId !== 'signup-page') {
                        targetBackPage = previousPageId;
                        targetBackTitle = previousPageId.split('-')[0].charAt(0).toUpperCase() + previousPageId.split('-')[0].slice(1).replace('-page','');
                        if (targetBackTitle === 'Home') targetBackTitle = 'Home';
                        else if (targetBackTitle === 'Profile') targetBackTitle = 'Profile';
                        else if (targetBackTitle === 'Chat') targetBackTitle = 'Chat';
                        else if (targetBackTitle === 'Settings') targetBackTitle = 'Settings';
                    } else {
                        targetBackPage = 'home-page';
                        targetBackTitle = 'Home';
                    }
                }
                showPage(targetBackPage, targetBackTitle, mainPages.includes(targetBackPage) ? false : !targetBackPage.endsWith('-sub-page'));
            };
            mainAppHeader.insertBefore(backBtn, mainAppHeader.firstChild);
        } else {
            menuBtn.style.display = 'block';
        }

        if (currentViewingPageId === 'profile-page') {
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.onclick = () => showPage('edit-profile-page', 'Edit Profile', true);
            headerActions.appendChild(editBtn);
        } else if (currentViewingPageId === 'edit-profile-page') {
            const cancelBtn = document.createElement('button');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.onclick = handleCancelMainEditProfile;

            const saveBtn = document.createElement('button');
            saveBtn.textContent = 'Save';
            saveBtn.onclick = handleSaveMainProfile;

            headerActions.appendChild(cancelBtn);
            headerActions.appendChild(saveBtn);
        }
    }

    function updateActiveBottomNav(pageId) {
        if (!bottomNavItems) return;
        bottomNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === pageId) {
                item.classList.add('active');
            }
        });
    }

    function calculateInitials(nameStr) {
        if (!nameStr || typeof nameStr !== 'string') return "U";
        const nameParts = nameStr.trim().split(' ').filter(part => part.length > 0);
        let initials = "";
        if (nameParts.length > 0 && nameParts[0].length > 0) {
            initials += nameParts[0][0].toUpperCase();
            if (nameParts.length > 1 && nameParts[nameParts.length - 1].length > 0 && nameParts[0] !== nameParts[nameParts.length - 1]) {
                initials += nameParts[nameParts.length - 1][0].toUpperCase();
            } else if (initials.length === 1 && nameParts[0].length > 1) {
                // If only one name part, use first two letters if available
                initials += nameParts[0][1].toUpperCase();
            }
        }
        return initials || "U";
    }

    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePasswordBtn.classList.toggle('fa-eye');
            togglePasswordBtn.classList.toggle('fa-eye-slash');
        });
    }

    // Password Toggles for Sign Up Page
    if (togglePasswordSignupBtn && passwordSignupInput) {
        togglePasswordSignupBtn.addEventListener('click', () => {
            const type = passwordSignupInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordSignupInput.setAttribute('type', type);
            togglePasswordSignupBtn.classList.toggle('fa-eye');
            togglePasswordSignupBtn.classList.toggle('fa-eye-slash');
        });
    }
    if (toggleConfirmPasswordSignupBtn && confirmPasswordSignupInput) {
        toggleConfirmPasswordSignupBtn.addEventListener('click', () => {
            const type = confirmPasswordSignupInput.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPasswordSignupInput.setAttribute('type', type);
            toggleConfirmPasswordSignupBtn.classList.toggle('fa-eye');
            toggleConfirmPasswordSignupBtn.classList.toggle('fa-eye-slash');
        });
    }


    if (loginBtn && emailInput && passwordInput && loginPage && loadingScreen && mainAppContent) {
        loginBtn.addEventListener('click', () => {
            const emailVal = emailInput.value;
            const passwordVal = passwordInput.value;
            if (emailVal && passwordVal) { // Basic validation
                // Simulate successful login
                currentProfileData.email = emailVal;
                currentProfileData.name = emailVal.split('@')[0] || "User"; // Use part before @ as name
                currentProfileData.initials = calculateInitials(currentProfileData.name);
                // Reset some fields for a fresh login
                currentProfileData.subtitle = "Quotes/Motto";
                currentProfileData.about = "Ready to make a difference today.";
                currentProfileData.badges = ["Age", "Gender"]; // Example default badges on login

                showPage('loading-screen', 'Loading');
                setTimeout(() => {
                    showPage('home-page', 'Home');
                }, 1500);
            } else {
                alert('Please enter email and password.');
            }
        });
    }

    // Create Account Button Logic
    if (createAccountBtn && fullNameSignupInput && emailSignupInput && passwordSignupInput && confirmPasswordSignupInput && loadingScreen && mainAppContent) {
        createAccountBtn.addEventListener('click', () => {
            const fullName = fullNameSignupInput.value.trim();
            const emailVal = emailSignupInput.value.trim();
            const passwordVal = passwordSignupInput.value; // Don't trim password
            const confirmPasswordVal = confirmPasswordSignupInput.value;

            if (!fullName || !emailVal || !passwordVal || !confirmPasswordVal) {
                alert('Please fill in all fields.');
                return;
            }
            if (!emailVal.includes('@') || !emailVal.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }
            if (passwordVal.length < 6) { // Example: minimum password length
                alert('Password must be at least 6 characters long.');
                return;
            }
            if (passwordVal !== confirmPasswordVal) {
                alert('Passwords do not match.');
                return;
            }

            // If all checks pass, simulate account creation
            currentProfileData.email = emailVal;
            currentProfileData.name = fullName;
            currentProfileData.initials = calculateInitials(currentProfileData.name);
            currentProfileData.subtitle = "Welcome to the community!";
            currentProfileData.about = "Just joined! Looking forward to learning and contributing.";
            currentProfileData.badges = []; // Start with no badges for new user

            showPage('loading-screen', 'Creating Account');
            setTimeout(() => {
                // Clear signup form fields after successful "creation"
                fullNameSignupInput.value = '';
                emailSignupInput.value = '';
                passwordSignupInput.value = '';
                confirmPasswordSignupInput.value = '';
                showPage('home-page', 'Home');
            }, 1500);
        });
    }


    // Auth Toggle Buttons
    // On Login Page:
    if (loginToggleBtn && signupToggleBtn) {
        loginToggleBtn.addEventListener('click', () => {
            showPage('login-page', 'Log In');
        });
        signupToggleBtn.addEventListener('click', () => {
            showPage('signup-page', 'Sign Up');
        });
    }
    // On Sign Up Page:
    if (loginToggleBtnSignup && signupToggleBtnSignup) {
        loginToggleBtnSignup.addEventListener('click', () => {
            showPage('login-page', 'Log In');
        });
        signupToggleBtnSignup.addEventListener('click', () => {
            showPage('signup-page', 'Sign Up');
        });
    }


    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('forgot-password-page', 'Forgot Password');
        });
    }

    if (sendResetLinkBtn && forgotEmailInput) {
        sendResetLinkBtn.addEventListener('click', () => {
            const email = forgotEmailInput.value.trim();
            if (email === "") {
                alert("Please enter your email address.");
                return;
            }
            if (!email.includes('@') || !email.includes('.')) { // Basic email format check
                alert("Please enter a valid email address.");
                return;
            }
            // Simulate sending link
            console.log(`Simulating sending password reset link to: ${email}`);
            alert(`If ${email} is associated with an account, a password reset link will be sent. (This is a demo)`);
            // Optionally clear input: forgotEmailInput.value = '';
        });
    }

    if (backToLoginBtn) {
        backToLoginBtn.addEventListener('click', () => {
            showPage('login-page', 'Log In');
        });
    }


    if (menuBtn && sideMenu && overlay) {
        menuBtn.addEventListener('click', () => {
            sideMenu.classList.add('open');
            overlay.classList.remove('hidden');
        });
    }
    if (closeMenuBtn && sideMenu && overlay) {
        closeMenuBtn.addEventListener('click', () => {
            sideMenu.classList.remove('open');
            overlay.classList.add('hidden');
        });
    }
    if (overlay && sideMenu) {
        overlay.addEventListener('click', () => {
            sideMenu.classList.remove('open');
            overlay.classList.add('hidden');
        });
    }

    if (categoryMenuList && Object.keys(categoryData).length > 0) {
        Object.values(categoryData).forEach(category => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.className = 'category-link';
            button.dataset.categoryId = category.id;
            const colorDotClass = badgeColors[category.label] || 'default'; // Use badgeColors for dot
            button.innerHTML = `<i class="fas fa-circle" style="color: var(--badge-${colorDotClass});"></i> ${category.label}`;
            button.onclick = () => {
                loadCategoryPage(category.id);
                // sideMenu.classList.remove('open'); // Close menu on selection
                // overlay.classList.add('hidden');
            };
            li.appendChild(button);
            categoryMenuList.appendChild(li);
        });
    }

    const aboutAppMenuButton = document.querySelector('.side-menu-item[data-page="about-app-page"]');
    if (aboutAppMenuButton) {
        aboutAppMenuButton.addEventListener('click', () => {
            showPage('about-app-page', 'About This App', true);
            // sideMenu.classList.remove('open');
            // overlay.classList.add('hidden');
        });
    }

    if (bottomNavItems) {
        bottomNavItems.forEach(item => {
            item.addEventListener('click', () => {
                const pageId = item.dataset.page;
                let title = pageId.split('-')[0].charAt(0).toUpperCase() + pageId.split('-')[0].slice(1);
                if (pageId === 'home-page') title = 'Home';
                if (pageId === 'profile-page') title = 'Profile';
                if (pageId === 'chat-page') title = 'Chat';
                if (pageId === 'settings-page') title = 'Settings';
                showPage(pageId, title, false); // Main pages are not sub-pages
            });
        });
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        // Check local storage for dark mode preference on load
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }
    }

    function renderQuotes(filter = "") {
        if (!quotesContainer) return;
        quotesContainer.innerHTML = '';
        const filteredQuotes = quotesData.filter(quote =>
            quote.text.toLowerCase().includes(filter.toLowerCase()) ||
            quote.author.toLowerCase().includes(filter.toLowerCase())
        );
        filteredQuotes.forEach(quote => {
            const card = document.createElement('div');
            card.className = 'quote-card';
            card.innerHTML = `
                <p>"${quote.text}"</p>
                <span>- ${quote.author}</span>
            `;
            quotesContainer.appendChild(card);
        });
    }
    if (searchQuotesInput) {
        searchQuotesInput.addEventListener('input', (e) => renderQuotes(e.target.value));
    }

    function loadProfileData() {
        if (!profilePicDisplay || !profileNameDisplay || !profileSubtitleDisplay || !profileAboutMeDisplay || !profileBadgesDisplay) return;
        profilePicDisplay.textContent = currentProfileData.initials;
        profileNameDisplay.textContent = currentProfileData.name;
        profileSubtitleDisplay.textContent = currentProfileData.subtitle;
        profileAboutMeDisplay.textContent = currentProfileData.about;
        profileBadgesDisplay.innerHTML = '';
        currentProfileData.badges.forEach(badgeLabel => {
            const badgeEl = document.createElement('span');
            const badgeClassKey = badgeColors[badgeLabel] || 'default';
            badgeEl.className = `badge ${badgeClassKey}`;
            badgeEl.textContent = badgeLabel;
            profileBadgesDisplay.appendChild(badgeEl);
        });
    }

    function loadMainEditProfileData() {
        if (!editProfilePicDisplay || !editProfileNameInput || !editProfileSubtitleInput || !editProfileAboutMeTextarea || !editProfileBadgesContainer) return;
        editProfilePicDisplay.textContent = currentProfileData.initials;
        editProfileNameInput.value = currentProfileData.name;
        editProfileSubtitleInput.value = currentProfileData.subtitle;
        editProfileAboutMeTextarea.value = currentProfileData.about;
        editProfileBadgesContainer.innerHTML = '';
        allBadges.forEach(badgeLabel => {
            const badgeEl = document.createElement('span');
            const badgeClassKey = badgeColors[badgeLabel] || 'default';
            badgeEl.className = `badge ${badgeClassKey}`;
            badgeEl.dataset.badgeLabel = badgeLabel; // Store label for saving
            if (currentProfileData.badges.includes(badgeLabel)) {
                badgeEl.classList.add('selected');
            }
            badgeEl.innerHTML = `${badgeLabel} <i class="fas fa-check"></i>`; // Check icon inside
            badgeEl.onclick = () => badgeEl.classList.toggle('selected');
            editProfileBadgesContainer.appendChild(badgeEl);
        });
    }

    function handleSaveMainProfile() {
        if (!editProfileNameInput || !editProfileSubtitleInput || !editProfileAboutMeTextarea || !editProfileBadgesContainer) return;
        currentProfileData.name = editProfileNameInput.value;
        currentProfileData.subtitle = editProfileSubtitleInput.value;
        currentProfileData.about = editProfileAboutMeTextarea.value;
        currentProfileData.initials = calculateInitials(currentProfileData.name);
        currentProfileData.badges = [];
        editProfileBadgesContainer.querySelectorAll('.badge.selected').forEach(bEl => {
            if (bEl.dataset.badgeLabel) { // Ensure it has the data attribute
                currentProfileData.badges.push(bEl.dataset.badgeLabel);
            }
        });
        showPage('profile-page', 'Profile', false); // Go back to profile page, not a sub-page
    }

    function handleCancelMainEditProfile() {
        showPage('profile-page', 'Profile', false); // Go back to profile page
    }

    function loadCategoryPage(categoryId) {
        const data = categoryData[categoryId];
        if (!categoryPageEl || !data) {
            showPage('home-page', 'Home'); // Fallback if data or element missing
            return;
        }
        showPage('category-page', data.label, true); // This is a sub-page
        if (categoryTabsContainer) categoryTabsContainer.innerHTML = ''; // Clear old tabs
        let firstTabId = null;

        Object.entries(data.tabs).forEach(([tabKey, _], index) => {
            const tabButton = document.createElement('button');
            tabButton.className = 'tab-link';
            tabButton.dataset.tab = tabKey;
            tabButton.textContent = tabKey.charAt(0).toUpperCase() + tabKey.slice(1);
            if (index === 0) {
                tabButton.classList.add('active');
                firstTabId = tabKey; // Capture the first tab
            }
            tabButton.onclick = () => displayCategoryTabContent(categoryId, tabKey);
            if (categoryTabsContainer) categoryTabsContainer.appendChild(tabButton);
        });

        // Add Questions tab if questions exist for the category
        if (data.questions && data.questions.length > 0) {
            const questionsTabButton = document.createElement('button');
            questionsTabButton.className = 'tab-link';
            questionsTabButton.dataset.tab = 'questions';
            questionsTabButton.textContent = 'Questions';
             if (!firstTabId) { // If no content tabs, make questions first
                 questionsTabButton.classList.add('active');
                 firstTabId = 'questions';
            }
            questionsTabButton.onclick = () => displayCategoryTabContent(categoryId, 'questions');
            if (categoryTabsContainer) categoryTabsContainer.appendChild(questionsTabButton);
        }

        // Display content for the first tab (or questions if it's first)
        if (firstTabId) displayCategoryTabContent(categoryId, firstTabId);
        else if (categoryContentArea) categoryContentArea.innerHTML = "<p>No content available.</p>"; // Fallback
    }

    function displayCategoryTabContent(categoryId, tabKey) {
        const data = categoryData[categoryId];
        if (!categoryPageEl || !data || !categoryContentArea) return;

        // Set active tab link
        if (categoryTabsContainer) {
            categoryTabsContainer.querySelectorAll('.tab-link').forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.tab === tabKey) tab.classList.add('active');
            });
        }

        categoryContentArea.innerHTML = ''; // Clear previous content

        if (tabKey === "questions") {
            const questions = data.questions;
            if (questions && questions.length > 0) {
                const questionsWrapper = document.createElement('div');
                questions.forEach((qItem) => {
                    const qDiv = document.createElement('div');
                    qDiv.className = 'reflection-question';
                    qDiv.innerHTML = `<p>${qItem.text}</p><div class="options"><button data-answer="yes">Yes</button><button data-answer="no">No</button></div><div class="reflection-feedback hidden"></div>`;

                    qDiv.querySelectorAll('.options button').forEach(btn => {
                        btn.onclick = () => {
                            const feedbackDiv = qDiv.querySelector('.reflection-feedback');
                            if (feedbackDiv) {
                                feedbackDiv.textContent = btn.dataset.answer === 'yes' ? qItem.feedbackYes : qItem.feedbackNo;
                                feedbackDiv.classList.remove('hidden');
                            }
                            // Disable buttons after one is clicked for this question
                            qDiv.querySelectorAll('.options button').forEach(b => b.disabled = true);
                        };
                    });
                    questionsWrapper.appendChild(qDiv);
                });
                categoryContentArea.appendChild(questionsWrapper);
            } else {
                categoryContentArea.innerHTML = `<p>No reflection questions available for this topic yet.</p>`;
            }
        } else if (data.tabs && data.tabs[tabKey]) {
            categoryContentArea.innerHTML = data.tabs[tabKey];
        } else {
            categoryContentArea.innerHTML = `<p>Content for this section is not available yet.</p>`;
        }
    }

    // --- CHATBOT LOGIC (Fixed & Refined) ---
    let lastBotQuestionContext = null; // Stores { type: 'category_info', categoryId, categoryLabel }

    function handleSimpleGreetingsAndFarewells(lowerMessage) {
        if (lowerMessage.match(/\b(hello|hi|hey|hallo|good morning|good afternoon|good evening)\b/i)) {
            const greetings = [
                `Hello ${currentProfileData.name.split(' ')[0]}! How can I assist you today?`,
                "Hi there! What anti-discrimination topic are you interested in?",
                "Greetings! I'm here to help you learn about discrimination. What's on your mind?"
            ];
            return greetings[Math.floor(Math.random() * greetings.length)];
        }
        if (lowerMessage.match(/\b(bye|goodbye|see ya|see you later|farewell)\b/i)) {
            return "Goodbye! Feel free to return if you have more questions.";
        }
        if (lowerMessage.match(/\b(thanks|thank you|thx|cheers|appreciated)\b/i)) {
            const thanksResponses = [
                "You're welcome!", "Happy to help!", "No problem at all. Let me know if there's anything else."
            ];
            return thanksResponses[Math.floor(Math.random() * thanksResponses.length)];
        }
        if (lowerMessage.match(/\b(how are you|how's it going|sup|what's up)\b/i)) {
            return "I'm an AI assistant, functioning optimally and ready to help you learn!";
        }
        if (lowerMessage.match(/\b(your name|who are you)\b/i)) {
            return "I am your friendly anti-discrimination assistant, created to provide information and encourage reflection.";
        }
        return null;
    }

    function extractTextFromHtml(htmlString) {
        if (typeof htmlString !== 'string' || !htmlString) return "No specific details available in brief.";
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString;
        let text = tempDiv.textContent || tempDiv.innerText || "";
        text = text.replace(/\s\s+/g, ' ').trim(); // Consolidate multiple spaces and trim
        return text.substring(0, 220) + (text.length > 220 ? "..." : ""); // Slightly shorter for chat
    }

    const categoryAspectKeywords = {
        impact: ["impact", "effect", "consequence", "affect", "result", "repercussion"],
        solutions: ["solution", "solve", "fix", "address", "help with", "combat", "tackle", "overcome", "prevent", "mitigate"],
        problems: ["problem", "issue", "challenge", "difficulty", "downside", "concern", "obstacle"],
        laws: ["law", "legal", "legislation", "rule", "regulation", "policy", "act", "statute"]
    };

    function handleCategorySpecificQueries(lowerMessage) {
        for (const categoryKey in categoryData) {
            const category = categoryData[categoryKey];
            const categoryLabelLower = category.label.toLowerCase();
            const categoryTerms = [categoryLabelLower, categoryKey.replace('_', ' ')]; // e.g., "sexual orientation", "sexualorientation"
            if (categoryLabelLower.includes("sexual orientation")) categoryTerms.push("sogie"); // Add SOGIE for sexual orientation

            let foundCategoryTerm = categoryTerms.find(term => lowerMessage.includes(term));

            if (foundCategoryTerm) {
                // Check for specific aspects
                for (const aspect in categoryAspectKeywords) {
                    if (categoryAspectKeywords[aspect].some(kw => lowerMessage.includes(kw))) {
                        if (category.tabs && category.tabs[aspect]) {
                            const content = extractTextFromHtml(category.tabs[aspect]);
                            return `Regarding ${category.label} and its ${aspect}: ${content} You can find more details in the side menu.`;
                        }
                    }
                }
                // Check for questions query
                if (lowerMessage.includes("question") || lowerMessage.includes("reflect")) {
                    if (category.questions && category.questions.length > 0) {
                         return `I have reflection questions for ${category.label}. You can find them under the 'Questions' tab when you select '${category.label}' from the side menu.`;
                    } else {
                        return `I don't have specific reflection questions for ${category.label} at the moment, but you can explore its impact, solutions, and problems from the side menu.`;
                    }
                }
                // If only the category term is mentioned, it will be handled by handleGeneralCategoryQueries
            }
        }
        return null;
    }

    function handleGeneralCategoryQueries(lowerMessage) {
        for (const categoryKey in categoryData) {
            const category = categoryData[categoryKey];
            const categoryLabelLower = category.label.toLowerCase();
            const categoryTerms = [categoryLabelLower, categoryKey.replace('_', ' ')];
            if (categoryLabelLower.includes("sexual orientation")) categoryTerms.push("sogie");

            if (categoryTerms.some(term => lowerMessage.includes(term))) {
                // Check if an aspect keyword is ALSO present. If so, let handleCategorySpecificQueries handle it.
                let aspectPresent = false;
                for (const aspect in categoryAspectKeywords) {
                    if (categoryAspectKeywords[aspect].some(kw => lowerMessage.includes(kw))) {
                        aspectPresent = true;
                        break;
                    }
                }
                if (aspectPresent) continue; // Skip if a specific aspect is already in the query

                lastBotQuestionContext = { type: 'category_info', categoryId: category.id, categoryLabel: category.label };
                return `I have information about ${category.label}. Would you like to know about its impact, solutions, common problems, or relevant laws? You can also explore it from the side menu.`;
            }
        }
        return null;
    }

    function handleAppFeatureQueries(lowerMessage) {
        if (lowerMessage.match(/\b(my profile|about me)\b/i)) {
            return `You can view and edit your profile details from the 'Profile' tab. For account-specific settings like password changes, go to 'Settings' then 'Account'.`;
        }
        if (lowerMessage.match(/\b(my badge|what badge|badges)\b/i)) {
            const badgeText = currentProfileData.badges && currentProfileData.badges.length > 0 ?
                `Your current advocacy badges are: ${currentProfileData.badges.join(', ')}.` :
                "You currently don't have any advocacy badges selected.";
            return `${badgeText} You can manage these in 'Edit Profile' via the 'Profile' tab.`;
        }
        if (lowerMessage.match(/\b(my name|change name)\b/i) && !lowerMessage.includes("your name")) { // Avoid "what's your name"
             return `Your profile name is '${currentProfileData.name}'. You can change this in 'Account Settings' (under Settings) or from the 'Edit Profile' screen.`;
        }
        if (lowerMessage.match(/\b(dark mode|theme|appearance)\b/i)) {
            return "You can toggle Dark Mode in the 'Settings' page, accessible from the bottom navigation bar.";
        }
        if (lowerMessage.match(/\b(about app|what is this app)\b/i)) {
            return "This application is designed to raise awareness about various forms of discrimination. You can find more details in the 'About This App' section, accessible from the side menu or 'Settings'.";
        }
        if (lowerMessage.match(/\b(logout|log out|sign out)\b/i)) {
            return "You can log out using the 'Logout' button in the side menu or at the bottom of the 'Settings' page.";
        }
        if (lowerMessage.match(/\b(password.*(change|reset|forgot))\b/i)) {
            return "To change your password, go to 'Settings', then 'Account'. If you've forgotten your password and are logged out, use the 'Forgot Password?' link on the login screen.";
        }
        return null;
    }

    function handleQuoteRequests(lowerMessage) {
        if (lowerMessage.match(/\b(quote|inspiration|inspire me|saying|motivation)\b/i)) {
            if (quotesData.length > 0) {
                const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];
                return `Here's an inspiring quote: "${randomQuote.text}" - ${randomQuote.author}`;
            }
            return "I'd love to share a quote, but I'm fresh out right now!";
        }
        return null;
    }

    function getFallbackResponse() {
        const fallbacks = [
            "I'm not sure I follow. Could you rephrase? You can ask about specific types of discrimination (e.g., 'impact of ageism') or app features.",
            "My apologies, I'm still learning. For detailed info, try the side menu or ask about 'solutions for gender discrimination', for example.",
            "I can help with discrimination topics, quotes, or app navigation. What are you looking for?",
            "Hmm, I didn't quite catch that. Try 'tell me about religious discrimination' or 'show me an inspiring quote'."
        ];
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }

    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase().trim();
        let response = "";

        // 1. Handle contextual follow-up if a category was just mentioned by the bot
        if (lastBotQuestionContext && lastBotQuestionContext.type === 'category_info') {
            const { categoryId, categoryLabel } = lastBotQuestionContext;
            let aspectFound = null;

            for (const aspect in categoryAspectKeywords) {
                if (categoryAspectKeywords[aspect].some(kw => lowerMessage.includes(kw))) {
                    aspectFound = aspect;
                    break;
                }
            }

            if (aspectFound) { // User specified an aspect
                if (categoryData[categoryId] && categoryData[categoryId].tabs[aspectFound]) {
                    const content = extractTextFromHtml(categoryData[categoryId].tabs[aspectFound]);
                    response = `Okay, regarding the ${aspectFound} of ${categoryLabel}: ${content} More details are in the side menu.`;
                    lastBotQuestionContext = null; // Context used
                    return response;
                }
            } else if (lowerMessage.match(/\b(yes|yeah|sure|ok|okay|tell me more|more info|please do)\b/i)) {
                // User is affirmative but not specific, re-prompt for aspect
                response = `Great! For ${categoryLabel}, would you like to know about its impact, solutions, problems, or laws?`;
                // Keep context: lastBotQuestionContext remains set
                return response;
            } else if (lowerMessage.match(/\b(no|nope|never mind|cancel|stop|later|not now)\b/i)) {
                response = "Alright. Let me know if you have other questions!";
                lastBotQuestionContext = null; // Context cancelled
                return response;
            }
            // If it's not a clear follow-up to the context, the context might still be active.
            // The general handlers below might pick it up if no explicit context keyword is used.
            // If it's a completely new query, the context should be cleared by the new handler.
        }


        // 2. Simple direct interactions (greetings, thanks, etc.)
        response = handleSimpleGreetingsAndFarewells(lowerMessage);
        if (response) { lastBotQuestionContext = null; return response; }

        // 3. Queries about specific aspects of a category (e.g., "impact of gender discrimination")
        response = handleCategorySpecificQueries(lowerMessage);
        if (response) { lastBotQuestionContext = null; return response; }

        // 4. General queries about a category (e.g., "tell me about ageism") - this sets context
        if (!lastBotQuestionContext) { // Only set new context if one wasn't just handled by follow-up logic
            response = handleGeneralCategoryQueries(lowerMessage);
            if (response) return response; // This sets lastBotQuestionContext, so return immediately
        }

        // 5. Queries about app features
        response = handleAppFeatureQueries(lowerMessage);
        if (response) { lastBotQuestionContext = null; return response; }

        // 6. Requests for quotes
        response = handleQuoteRequests(lowerMessage);
        if (response) { lastBotQuestionContext = null; return response; }

        // 7. Fallback if nothing else matched
        lastBotQuestionContext = null; // Clear any lingering context before fallback
        return getFallbackResponse();
    }
    // --- END OF CHATBOT LOGIC ---

    let typingIndicatorTimeout;
    function addTypingIndicator() {
        if (!chatWindow) return;
        removeTypingIndicator(); // Clear any existing one
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot typing-indicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatWindow.appendChild(typingDiv);
        if (chatWindow.lastChild) {
            chatWindow.lastChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }

    function removeTypingIndicator() {
        if (!chatWindow) return;
        const typingIndicator = chatWindow.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
        if (typingIndicatorTimeout) {
            clearTimeout(typingIndicatorTimeout);
        }
    }

    function sendChatMessage() {
        if (!chatMessageInput || !chatWindow) return;
        const messageText = chatMessageInput.value.trim();
        if (messageText === '') return;

        addChatMessageToUI(messageText, 'user');
        chatMessageInput.value = '';
        addTypingIndicator();

        typingIndicatorTimeout = setTimeout(() => {
            removeTypingIndicator();
            const botResponse = getBotResponse(messageText);
            addChatMessageToUI(botResponse, 'bot');
        }, 1200 + Math.random() * 800);
    }

    function addChatMessageToUI(text, type) {
        if (!chatWindow) return;
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;
        messageDiv.textContent = text;
        chatWindow.appendChild(messageDiv);
        if (chatWindow.lastChild) {
            chatWindow.lastChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }

    if (sendChatBtn) sendChatBtn.addEventListener('click', sendChatMessage);
    if (chatMessageInput) chatMessageInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendChatMessage(); });

    if (settingsItems) {
        settingsItems.forEach(item => {
            item.addEventListener('click', () => {
                const pageId = item.dataset.page;
                const titleEl = item.querySelector('span'); // Get title from span inside
                const title = titleEl ? titleEl.textContent.trim() : 'Sub Page';
                showPage(pageId, title, true); // These are sub-pages
            });
        });
    }

    function loadAccountPageData() {
        if (!accountProfileNameInput || !accountProfileSubtitleInput || !accountProfileAboutTextarea || !accountEmailDisplay) return;
        accountProfileNameInput.value = currentProfileData.name;
        accountProfileSubtitleInput.value = currentProfileData.subtitle;
        accountProfileAboutTextarea.value = currentProfileData.about;
        accountEmailDisplay.textContent = currentProfileData.email;
    }

    function handleSaveAccountProfileInfo() {
        if (!accountProfileNameInput || !accountProfileSubtitleInput || !accountProfileAboutTextarea) return;
        currentProfileData.name = accountProfileNameInput.value.trim();
        currentProfileData.subtitle = accountProfileSubtitleInput.value.trim();
        currentProfileData.about = accountProfileAboutTextarea.value.trim();
        currentProfileData.initials = calculateInitials(currentProfileData.name);
        alert("Profile information updated!");
        // If user is on main profile or edit profile, update those too
        if (currentPageId === 'profile-page') loadProfileData();
        if (currentPageId === 'edit-profile-page') loadMainEditProfileData(); // This will also update initials display
    }

    if (saveAccountProfileBtn) saveAccountProfileBtn.addEventListener('click', handleSaveAccountProfileInfo);
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', () => {
            const currentPass = document.getElementById('current-password');
            const newPass = document.getElementById('new-password');
            const confirmPass = document.getElementById('confirm-new-password');
            if (currentPass && newPass && confirmPass && currentPass.value && newPass.value && newPass.value === confirmPass.value) {
                alert("Password update demo. (No actual change).");
                currentPass.value = ''; newPass.value = ''; confirmPass.value = '';
            } else if (newPass && confirmPass && newPass.value !== confirmPass.value) {
                 alert("New passwords do not match.");
            } else {
                alert("Please fill all password fields correctly.");
            }
        });
    }
    if (deactivateAccountBtn) {
        deactivateAccountBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to deactivate your account? This action is for demo purposes.")) {
                alert("Account deactivation demo. Logging out.");
                handleLogout();
            }
        });
    }

    function handleLogout() {
        // Reset user data to a default state
        currentProfileData = { name: "User", subtitle: "", about: "", badges: [], initials: "U", email: "" };
        if (emailInput) emailInput.value = ''; // Clear login form email
        if (passwordInput) passwordInput.value = ''; // Clear login form password
        // Clear signup form fields too, if they exist and were filled
        if (fullNameSignupInput) fullNameSignupInput.value = '';
        if (emailSignupInput) emailSignupInput.value = '';
        if (passwordSignupInput) passwordSignupInput.value = '';
        if (confirmPasswordSignupInput) confirmPasswordSignupInput.value = '';

        showPage('login-page', 'Log In');
    }
    if(logoutMenuBtn) logoutMenuBtn.addEventListener('click', handleLogout);
    if(logoutSettingsBtn) logoutSettingsBtn.addEventListener('click', handleLogout);

    // Initial page load logic
    if (loginPage && mainAppContent && forgotPasswordPage && signupPage) { // Ensure signupPage exists
        currentPageId = 'login-page'; // Default starting page
        previousPageId = 'login-page';
        showPage('login-page', 'Log In');
    } else {
        console.error("Critical page elements (login, main app, forgot password, or signup) not found for initial load.");
        document.body.innerHTML = "<p style='color:red;'>Error: Core app structure missing. Cannot initialize.</p>";
    }
});

window.onerror = function(message, source, lineno, colno, error) {
  console.error("GLOBAL ERROR:", { message, source, lineno, colno, errorObject: error });
  // alert("A global JavaScript error occurred. Check console for details."); // Optional user feedback
};

// --- Slideshow Global Variables and Functions (ensure these are accessible) ---
let slideIndexGlobal = 1;
let slideshowTimeoutGlobal;
const SLIDESHOW_INTERVAL = 4500;
const SLIDESHOW_RESTART_DELAY = 9000;

function displaySlide(index) {
    const homePage = document.getElementById('home-page');
    if (!homePage || homePage.classList.contains('hidden')) {
        clearTimeout(slideshowTimeoutGlobal); // Stop slideshow if not on home page
        return;
    }
    const slides = homePage.querySelectorAll(".slideshow-container .slide");
    const dots = homePage.querySelectorAll(".slide-dots .dot");
    if (slides.length === 0) return;
    if (index > slides.length) { slideIndexGlobal = 1; }
    if (index < 1) { slideIndexGlobal = slides.length; }
    slides.forEach(slide => slide.style.display = "none");
    if (dots.length > 0) {
        dots.forEach(dot => dot.classList.remove("active-dot"));
    }
    if (slides[slideIndexGlobal - 1]) {
        slides[slideIndexGlobal - 1].style.display = "block";
        // Force reflow for animation restart if needed
        slides[slideIndexGlobal - 1].classList.remove('fade');
        void slides[slideIndexGlobal - 1].offsetWidth; // Reflow
        slides[slideIndexGlobal - 1].classList.add('fade');
    }
    if (dots.length > 0 && dots[slideIndexGlobal - 1]) {
        dots[slideIndexGlobal - 1].classList.add("active-dot");
    }
}

function autoAdvanceSlides() {
    const homePage = document.getElementById('home-page');
    if (!homePage || homePage.classList.contains('hidden')) {
        clearTimeout(slideshowTimeoutGlobal);
        return;
    }
    slideIndexGlobal++;
    displaySlide(slideIndexGlobal);
    slideshowTimeoutGlobal = setTimeout(autoAdvanceSlides, SLIDESHOW_INTERVAL);
}

function plusSlides(n) {
    const homePage = document.getElementById('home-page');
    if (!homePage || homePage.classList.contains('hidden')) return;
    clearTimeout(slideshowTimeoutGlobal);
    slideIndexGlobal += n;
    displaySlide(slideIndexGlobal);
    slideshowTimeoutGlobal = setTimeout(autoAdvanceSlides, SLIDESHOW_RESTART_DELAY); // Restart auto-advance after manual interaction
}

function currentSlide(n) {
    const homePage = document.getElementById('home-page');
    if (!homePage || homePage.classList.contains('hidden')) return;
    clearTimeout(slideshowTimeoutGlobal);
    slideIndexGlobal = n;
    displaySlide(slideIndexGlobal);
    slideshowTimeoutGlobal = setTimeout(autoAdvanceSlides, SLIDESHOW_RESTART_DELAY);
}