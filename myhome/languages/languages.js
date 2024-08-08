document.addEventListener('DOMContentLoaded', function() {
  const switchElement = document.getElementById('language-toggle');
  const aboutTextElement = document.getElementById('about_text');
  const emailTextElement = document.getElementById('email_text');
  const educationTextElement = document.getElementById('education_text');
  const experienceTextElement = document.getElementById('experience_text');
  const contactTextElement = document.getElementById('contact_text');
  const project3DTextElement = document.getElementById('project3D_text');
  const otherprojectTextElement = document.getElementById('otherproject_text');
  const ModelingTextElement = document.getElementById('Modeling_text');
  const contactInformationTextElement = document.getElementById('contactInformation_text');
  const eduTextElement = document.getElementById('edu_text');
  const linkElement = document.getElementById('link_text');

  // 加载语言文件
  fetch('languages/languages.json')
    .then(response => response.json())
    .then(data => {
      const languages = data;
      const toggleLanguage = (language) => {
        aboutTextElement.innerHTML = languages[language].about;
        emailTextElement.innerHTML = languages[language].email;
        educationTextElement.innerHTML = languages[language].education;
        experienceTextElement.innerHTML = languages[language].experience;
        contactTextElement.innerHTML = languages[language].contact;
        project3DTextElement.innerHTML = languages[language].project3D;
        otherprojectTextElement.innerHTML = languages[language].otherproject;
        ModelingTextElement.innerHTML = languages[language].Modeling;
        contactInformationTextElement.innerHTML = languages[language].contactInformation;
        eduTextElement.innerHTML = languages[language].edu;
        linkElement.innerHTML = languages[language].link;
      };

      // 根据浏览器语言设置默认语言
      const defaultLanguage = navigator.language.startsWith('zh') ? 'zh' : 'en';
      toggleLanguage(defaultLanguage);

      // 根据默认语言设置按钮状态
      switchElement.checked = defaultLanguage === 'en';

      switchElement.addEventListener('change', function() {
        const language = this.checked ? 'en' : 'zh';
        toggleLanguage(language);
      });
    })
    .catch(error => {
      console.error('Error loading languages.json:', error);
    });
});