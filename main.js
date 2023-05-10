const htmlCode = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kurnia - Frontend Web Developer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <main>
      <span class="theme-switcher"
        ><svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 13.3333C19.558 13.3333 19.1341 13.5089 18.8215 13.8215C18.5089 14.134 18.3333 14.558 18.3333 15C18.3333 15.442 18.5089 15.8659 18.8215 16.1785C19.1341 16.4911 19.558 16.6667 20 16.6667C20.8841 16.6667 21.7319 17.0179 22.357 17.643C22.9821 18.2681 23.3333 19.1159 23.3333 20C23.3333 20.8841 22.9821 21.7319 22.357 22.357C21.7319 22.9821 20.8841 23.3333 20 23.3333C19.558 23.3333 19.1341 23.5089 18.8215 23.8215C18.5089 24.134 18.3333 24.558 18.3333 25C18.3333 25.442 18.5089 25.8659 18.8215 26.1785C19.1341 26.4911 19.558 26.6667 20 26.6667C21.7681 26.6667 23.4638 25.9643 24.714 24.714C25.9643 23.4638 26.6667 21.7681 26.6667 20C26.6667 18.2319 25.9643 16.5362 24.714 15.286C23.4638 14.0357 21.7681 13.3333 20 13.3333V13.3333ZM36.1833 18.8167L32.2667 15V9.4C32.2667 8.95797 32.0911 8.53405 31.7785 8.22149C31.466 7.90893 31.042 7.73333 30.6 7.73333H25.0833L21.1833 3.81667C21.0284 3.66045 20.8441 3.53646 20.641 3.45185C20.4379 3.36723 20.22 3.32367 20 3.32367C19.78 3.32367 19.5621 3.36723 19.359 3.45185C19.1559 3.53646 18.9716 3.66045 18.8167 3.81667L15 7.73333H9.4C8.95797 7.73333 8.53405 7.90893 8.22149 8.22149C7.90893 8.53405 7.73333 8.95797 7.73333 9.4V15L3.81667 18.8167C3.66045 18.9716 3.53646 19.1559 3.45185 19.359C3.36723 19.5621 3.32367 19.78 3.32367 20C3.32367 20.22 3.36723 20.4379 3.45185 20.641C3.53646 20.8441 3.66045 21.0284 3.81667 21.1833L7.73333 25.0833V30.6C7.73333 31.042 7.90893 31.4659 8.22149 31.7785C8.53405 32.0911 8.95797 32.2667 9.4 32.2667H15L18.9 36.1833C19.0549 36.3395 19.2393 36.4635 19.4424 36.5482C19.6455 36.6328 19.8633 36.6763 20.0833 36.6763C20.3034 36.6763 20.5212 36.6328 20.7243 36.5482C20.9274 36.4635 21.1117 36.3395 21.2667 36.1833L25.1667 32.2667H30.6833C31.1254 32.2667 31.5493 32.0911 31.8618 31.7785C32.1744 31.4659 32.35 31.042 32.35 30.6V25.0833L36.2667 21.1833C36.4176 21.023 36.5352 20.8343 36.6127 20.6282C36.6902 20.4221 36.7262 20.2027 36.7184 19.9826C36.7107 19.7626 36.6594 19.5462 36.5676 19.3461C36.4757 19.146 36.3451 18.966 36.1833 18.8167ZM29.4333 23.2167C29.2759 23.371 29.1506 23.5551 29.0647 23.7582C28.9789 23.9613 28.9343 24.1795 28.9333 24.4V28.9333H24.4C24.1795 28.9342 23.9614 28.9789 23.7582 29.0647C23.5551 29.1506 23.371 29.2759 23.2167 29.4333L20 32.65L16.7833 29.4333C16.629 29.2759 16.4449 29.1506 16.2418 29.0647C16.0387 28.9789 15.8205 28.9342 15.6 28.9333H11.0667V24.4C11.0658 24.1795 11.0211 23.9613 10.9353 23.7582C10.8494 23.5551 10.7241 23.371 10.5667 23.2167L7.35 20L10.5667 16.7833C10.7241 16.629 10.8494 16.4449 10.9353 16.2418C11.0211 16.0386 11.0658 15.8205 11.0667 15.6V11.0667H15.6C15.8205 11.0658 16.0387 11.0211 16.2418 10.9353C16.4449 10.8494 16.629 10.7241 16.7833 10.5667L20 7.35L23.2167 10.5667C23.371 10.7241 23.5551 10.8494 23.7582 10.9353C23.9614 11.0211 24.1795 11.0658 24.4 11.0667H28.9333V15.6C28.9343 15.8205 28.9789 16.0386 29.0647 16.2418C29.1506 16.4449 29.2759 16.629 29.4333 16.7833L32.65 20L29.4333 23.2167Z"
          />
        </svg>
      </span>

      <section class="bio">
        <div class="avatar">
          <img src="https://avatars.githubusercontent.com/u/131561135" alt="" />
        </div>
        <div class="bio-detail">
          <h1>Kurniawan Saputro</h1>
          <p>Frontend Web Developer</p>
          <ul class="social-list">
            <li>
              <a
                href="https://github.com/kurnia-1654"
                title="Github"
                rel="noopener"
                target="_blank"
              >
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 3.87005C14.4382 3.8702 10.9927 5.13772 8.27995 7.44582C5.5672 9.75392 3.76425 12.952 3.1937 16.4678C2.62315 19.9836 3.32223 23.5877 5.16585 26.6352C7.00947 29.6827 9.87733 31.9748 13.2563 33.1013C14.0063 33.2326 14.2875 32.7826 14.2875 32.3888C14.2875 32.0325 14.2688 30.8513 14.2688 29.595C10.5 30.2888 9.525 28.6763 9.225 27.8326C8.89212 27.012 8.36442 26.2848 7.6875 25.7138C7.1625 25.4325 6.4125 24.7388 7.66874 24.7201C8.14842 24.7721 8.60848 24.939 9.00995 25.2067C9.41142 25.4743 9.74245 25.8348 9.975 26.2575C10.1802 26.6261 10.456 26.9505 10.7868 27.2123C11.1176 27.474 11.4967 27.6679 11.9026 27.7829C12.3084 27.8979 12.7329 27.9316 13.1518 27.8822C13.5707 27.8328 13.9758 27.7012 14.3437 27.495C14.4087 26.7325 14.7485 26.0195 15.3 25.4888C11.9625 25.1138 8.475 23.82 8.475 18.0826C8.45392 16.5918 9.00403 15.1495 10.0125 14.0513C9.55393 12.7557 9.60758 11.3338 10.1625 10.0763C10.1625 10.0763 11.4187 9.68258 14.2875 11.6138C16.7419 10.9388 19.3331 10.9388 21.7875 11.6138C24.6562 9.66384 25.9125 10.0763 25.9125 10.0763C26.4675 11.3338 26.5212 12.7557 26.0625 14.0513C27.074 15.1476 27.6246 16.5912 27.6 18.0826C27.6 23.8388 24.0937 25.1138 20.7563 25.4888C21.1142 25.8517 21.3899 26.2873 21.5646 26.7661C21.7393 27.2449 21.809 27.7557 21.7688 28.2638C21.7688 30.2701 21.75 31.8826 21.75 32.3888C21.75 32.7826 22.0312 33.2513 22.7812 33.1013C26.1542 31.9656 29.0139 29.6682 30.8496 26.6191C32.6854 23.57 33.3778 19.9678 32.8033 16.4554C32.2288 12.943 30.4248 9.74911 27.7132 7.44381C25.0016 5.13852 21.5591 3.8719 18 3.87005Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33 9.2C31.8725 9.68914 30.6801 10.0125 29.46 10.16C30.7473 9.39098 31.7119 8.18118 32.175 6.755C30.9653 7.4751 29.6411 7.98245 28.26 8.255C27.3368 7.25386 26.1075 6.58745 24.7647 6.36028C23.422 6.13311 22.0418 6.35804 20.8407 6.99979C19.6396 7.64153 18.6854 8.6638 18.1279 9.90626C17.5703 11.1487 17.4409 12.5411 17.76 13.865C15.3141 13.7413 12.9217 13.1044 10.738 11.9958C8.5543 10.8872 6.62827 9.33154 5.085 7.43C4.54371 8.37525 4.25928 9.44574 4.26 10.535C4.25808 11.5466 4.50633 12.5429 4.98263 13.4353C5.45894 14.3278 6.14853 15.0886 6.99 15.65C6.01197 15.6234 5.05483 15.3609 4.2 14.885V14.96C4.20733 16.3773 4.70399 17.7486 5.60597 18.8419C6.50795 19.9353 7.75988 20.6835 9.15 20.96C8.61488 21.1229 8.05931 21.2087 7.5 21.215C7.11284 21.2105 6.72663 21.1754 6.345 21.11C6.74086 22.3292 7.50693 23.3947 8.53661 24.1582C9.56629 24.9218 10.8084 25.3453 12.09 25.37C9.9258 27.0729 7.25383 28.0023 4.5 28.01C3.9986 28.0116 3.4976 27.9816 3 27.92C5.81164 29.7354 9.08822 30.6991 12.435 30.695C14.7445 30.719 17.0357 30.2825 19.1747 29.4111C21.3136 28.5397 23.2575 27.2508 24.8928 25.6197C26.5281 23.9887 27.8219 22.0481 28.6988 19.9114C29.5757 17.7746 30.0181 15.4846 30 13.175C30 12.92 30 12.65 30 12.38C31.177 11.5022 32.1922 10.4261 33 9.2Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://id.linkedin.com/in/kurniawan-saputro-44bb81200"
                target="_blank"
                rel="noopener"
                title="LinkedIn"
              >
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.705 3.5H5.295C5.00937 3.49603 4.72575 3.54837 4.46035 3.65402C4.19495 3.75968 3.95295 3.91658 3.7482 4.11576C3.54344 4.31495 3.37992 4.55252 3.26699 4.81491C3.15405 5.0773 3.09391 5.35936 3.09 5.645V31.355C3.09391 31.6406 3.15405 31.9227 3.26699 32.1851C3.37992 32.4475 3.54344 32.685 3.7482 32.8842C3.95295 33.0834 4.19495 33.2403 4.46035 33.346C4.72575 33.4516 5.00937 33.504 5.295 33.5H30.705C30.9906 33.504 31.2742 33.4516 31.5396 33.346C31.8051 33.2403 32.047 33.0834 32.2518 32.8842C32.4566 32.685 32.6201 32.4475 32.733 32.1851C32.8459 31.9227 32.9061 31.6406 32.91 31.355V5.645C32.9061 5.35936 32.8459 5.0773 32.733 4.81491C32.6201 4.55252 32.4566 4.31495 32.2518 4.11576C32.047 3.91658 31.8051 3.75968 31.5396 3.65402C31.2742 3.54837 30.9906 3.49603 30.705 3.5ZM12.135 28.61H7.635V15.11H12.135V28.61ZM9.885 13.22C9.26439 13.22 8.6692 12.9735 8.23037 12.5346C7.79153 12.0958 7.545 11.5006 7.545 10.88C7.545 10.2594 7.79153 9.6642 8.23037 9.22537C8.6692 8.78653 9.26439 8.54 9.885 8.54C10.2145 8.50262 10.5483 8.53528 10.8643 8.63582C11.1804 8.73636 11.4716 8.90253 11.719 9.12344C11.9664 9.34435 12.1643 9.61501 12.2998 9.91772C12.4353 10.2204 12.5054 10.5483 12.5054 10.88C12.5054 11.2117 12.4353 11.5396 12.2998 11.8423C12.1643 12.145 11.9664 12.4156 11.719 12.6366C11.4716 12.8575 11.1804 13.0236 10.8643 13.1242C10.5483 13.2247 10.2145 13.2574 9.885 13.22ZM28.365 28.61H23.865V21.365C23.865 19.55 23.22 18.365 21.585 18.365C21.079 18.3687 20.5863 18.5274 20.1733 18.8198C19.7602 19.1121 19.4467 19.524 19.275 20C19.1576 20.3526 19.1068 20.7239 19.125 21.095V28.595H14.625C14.625 28.595 14.625 16.325 14.625 15.095H19.125V17C19.5338 16.2907 20.1284 15.7063 20.8447 15.3098C21.561 14.9133 22.3719 14.7198 23.19 14.75C26.19 14.75 28.365 16.685 28.365 20.84V28.61Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="" title="Youtube">
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.5 15.065C34.5742 12.918 34.1046 10.787 33.135 8.87C32.4771 8.0834 31.5641 7.55256 30.555 7.37C26.3813 6.99129 22.1903 6.83607 18 6.905C13.825 6.83294 9.64907 6.98315 5.49 7.355C4.66773 7.50457 3.90678 7.89026 3.3 8.465C1.95 9.71 1.8 11.84 1.65 13.64C1.43237 16.8763 1.43237 20.1237 1.65 23.36C1.6934 24.3731 1.84424 25.3787 2.1 26.36C2.28086 27.1176 2.64679 27.8185 3.165 28.4C3.7759 29.0052 4.55458 29.4128 5.4 29.57C8.63388 29.9692 11.8923 30.1346 15.15 30.065C20.4 30.14 25.005 30.065 30.45 29.645C31.3162 29.4975 32.1168 29.0893 32.745 28.475C33.1649 28.0549 33.4786 27.5406 33.66 26.975C34.1964 25.3289 34.4599 23.6062 34.44 21.875C34.5 21.035 34.5 15.965 34.5 15.065ZM14.61 22.775V13.49L23.49 18.155C21 19.535 17.715 21.095 14.61 22.775Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="experiences">
        <div class="experience-item">
          <p class="num">0.0</p>
          <p class="item-detail">Years of work experience</p>
        </div>
        <div class="experience-item">
          <p class="num">5</p>
          <p class="item-detail">Completed projects</p>
        </div>
        <div class="experience-item">
          <p class="num">0</p>
          <p class="item-detail">Satisfied customers</p>
        </div>
      </section>

      <section class="button-wrapper">
        <button id="download-btn" class="download-btn" type="button">
          Download CV
          <svg
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5189 20H5.78098C5.48284 20 5.19691 20.1054 4.9861 20.2929C4.77528 20.4804 4.65685 20.7348 4.65685 21C4.65685 21.2652 4.77528 21.5196 4.9861 21.7071C5.19691 21.8946 5.48284 22 5.78098 22H21.5189C21.8171 22 22.103 21.8946 22.3138 21.7071C22.5246 21.5196 22.6431 21.2652 22.6431 21C22.6431 20.7348 22.5246 20.4804 22.3138 20.2929C22.103 20.1054 21.8171 20 21.5189 20ZM12.8518 17.71C12.9587 17.801 13.0848 17.8724 13.2228 17.92C13.3573 17.9729 13.5028 18.0002 13.6499 18.0002C13.7971 18.0002 13.9426 17.9729 14.0771 17.92C14.2151 17.8724 14.3412 17.801 14.4481 17.71L18.9446 13.71C19.1563 13.5217 19.2752 13.2663 19.2752 13C19.2752 12.7337 19.1563 12.4783 18.9446 12.29C18.733 12.1017 18.4459 11.9959 18.1465 11.9959C17.8471 11.9959 17.56 12.1017 17.3484 12.29L14.7741 14.59V3C14.7741 2.73478 14.6557 2.48043 14.4448 2.29289C14.234 2.10536 13.9481 2 13.6499 2C13.3518 2 13.0659 2.10536 12.8551 2.29289C12.6442 2.48043 12.5258 2.73478 12.5258 3V14.59L9.95153 12.29C9.84672 12.1968 9.72229 12.1228 9.58535 12.0723C9.4484 12.0219 9.30162 11.9959 9.1534 11.9959C9.00517 11.9959 8.85839 12.0219 8.72145 12.0723C8.5845 12.1228 8.46007 12.1968 8.35526 12.29C8.25045 12.3832 8.1673 12.4939 8.11058 12.6158C8.05385 12.7376 8.02466 12.8681 8.02466 13C8.02466 13.1319 8.05385 13.2624 8.11058 13.3842C8.1673 13.5061 8.25045 13.6168 8.35526 13.71L12.8518 17.71Z"
            />
          </svg>
        </button>
        <button
          id="contact-btn"
          class="contact-btn"
          type="button"
          onclick="window.location.href ='mailto:kurniawanviic54@gmail.com'"
        >
          Contact me
        </button>
      </section>

      <section id="tab">
        <div class="tabs-button-container">
          <button class="tabs-button active">Portofolio</button>
          <button class="tabs-button">Skills</button>
        </div>

        <div class="tabs-content-container" id="project">
          <div class="tabs-content">
            <img src="res/project-1.jpg" alt="" />
            <div class="tabs-content-detail">
              <h3>SmarterTrading411</h3>
              <p>Landing page of SmarterTrading411 created using wordPress</p>
              <span class="tabs-content-detail-link"></span>
            </div>
          </div>
          <div class="tabs-content">
            <img src="res/project-2.jpg" alt="" />
            <div class="tabs-content-detail">
              <h3>SmarterTrading411</h3>
              <p>Landing page of SmarterTrading411 created using wordPress</p>
              <span class="tabs-content-detail-link"></span>
            </div>
          </div>
          <div class="tabs-content">
            <img src="res/project-3.jpg" alt="" />
            <div class="tabs-content-detail">
              <h3>SmarterTrading411</h3>
              <p>Landing page of SmarterTrading411 created using wordPress</p>
              <span class="tabs-content-detail-link"></span>
            </div>
          </div>
          <div class="tabs-content">
            <img src="res/project-4.jpg" alt="" />
            <div class="tabs-content-detail">
              <h3>SmarterTrading411</h3>
              <p>Landing page of SmarterTrading411 created using wordPress</p>
              <span class="tabs-content-detail-link"></span>
            </div>
          </div>
          <div class="tabs-content">
            <img src="res/project-5.jpg" alt="" />
            <div class="tabs-content-detail">
              <h3>SmarterTrading411</h3>
              <p>Landing page of SmarterTrading411 created using wordPress</p>
              <span class="tabs-content-detail-link"></span>
            </div>
          </div>
          <div class="tabs-content">
            <img src="res/project-6.jpg" alt="" />
            <div class="tabs-content-detail">
              <h3>SmarterTrading411</h3>
              <p>Landing page of SmarterTrading411 created using wordPress</p>
              <span title="Copy link" class="tabs-content-detail-link"></span>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>© Kurnia. 2023 All rigths reserved</footer>
  </body>
</html>
`

const cssCode = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --1st-text-color: #3d3d3d;
    --2nd-text-color: #575757;
    --3rd-text-color: #19191b;
    --footer-text-color: #575757;
    --icon-color: var(--2nd-text-color);
    --main-color: #ffa600;
    --secondary-color: #d7d7d7;
    --tertiary-color: #ffffff;
    --body-bg-color: #e9ebec;
    --hover-bg-color: rgba(255, 224, 113, 0.88);
    --radius: 20px;
    --btn-radius: 10px;
  }
  
  html.is-dark {
    --1st-text-color: #f1f2f4;
    --2nd-text-color: #a3abb2;
    --3rd-text-color: #a3abb2;
    --footer-text-color: #a3abb2;
    --icon-color: var(--2nd-text-color);
    /* --main-color: #ffe071; */
    --secondary-color: #0c151d;
    --tertiary-color: #171f26;
    --body-bg-color: #0c151d;
  }
  
  .ic-github svg,
  .ic-twitter svg,
  .ic-linkedin svg,
  .ic-youtube svg {
    fill: var(--2nd-text-color);
  }
  
  body {
    font-family: "Poppins", sans-serif;
    font-size: 10px;
    line-height: 1.2;
    background: var(--body-bg-color);
    transition: 0.3s;
  }
  
  main,
  footer {
    max-width: 760px;
    display: flex;
    margin: 33px auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  footer {
    font-weight: 500;
    font-size: 2.2em;
    line-height: 33px;
    color: var(--footer-text-color);
    text-align: center;
    padding: 80px 20px;
    margin-top: 50px;
  }
  
  img {
    -webkit-user-drag: none;
    -webkit-user-select: none;
    user-select: none;
  }
  
  span.theme-switcher {
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: var(--tertiary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  span.theme-switcher svg {
    width: 40px;
    height: 40px;
  }
  
  span.theme-switcher svg path {
    fill: var(--1st-text-color);
  }
  
  .bio {
    display: inline-flex;
    gap: 40px;
    align-items: center;
    margin: 65px auto;
  }
  
  .bio .avatar {
    background: white;
    border-radius: 50%;
    border: 4px solid var(--main-color);
    padding: 11px;
  }
  
  .bio .avatar img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    max-width: 200px;
  }
  
  .bio .bio-detail h1 {
    font-weight: 500;
    font-size: 4.6em;
    line-height: 69px;
    color: var(--1st-text-color);
  }
  
  .bio .bio-detail p {
    font-weight: 500;
    font-size: 2.2em;
    line-height: 33px;
    color: var(--2nd-text-color);
  }
  
  .bio .bio-detail ul {
    margin-top: 12px;
    list-style: none;
    display: inline-flex;
    gap: 26px;
  }
  
  .bio .bio-detail ul li a svg path {
    fill: var(--2nd-text-color);
  }
  
  .experiences {
    display: inline-flex;
    /* gap: 90px; */
    gap: clamp(27px, 5vw, 90px);
    padding: 20px;
    max-width: 635px;
  }
  
  .experiences .experience-item {
    text-align: center;
  }
  
  .experiences .experience-item .num {
    font-weight: 500;
    font-size: 2.4em;
    line-height: 36px;
    color: var(--3rd-text-color);
  }
  
  .experiences .experience-item .item-detail {
    font-weight: 500;
    font-size: 2.2em;
    line-height: 1.5;
    color: var(--2nd-text-color);
  }
  
  button {
    all: unset;
    cursor: pointer;
    padding: 1.1em 0;
    border-radius: var(--btn-radius);
    font-weight: 500;
    font-size: clamp(12px, 2vw, 22px);
    line-height: 1.1;
    text-align: center;
    transition: 0.15s;
  }
  
  button:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.11);
  }
  
  .button-wrapper {
    display: inline-flex;
    gap: clamp(14px, 5vw, 38px);
    margin-top: 47px;
    width: 100%;
    max-width: 618px;
  }
  
  button.download-btn,
  button.contact-btn {
    color: var(--1st-text-color);
    display: inline-flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    width: 50%;
    max-width: 290px;
  }
  
  button.download-btn {
    color: #3d3d3d;
    background: var(--main-color);
  }
  
  button.contact-btn {
    background: var(--tertiary-color);
  }
  
  button.download-btn svg {
    height: 1.2em;
    width: auto;
  }
  button.download-btn svg path {
    fill: #3d3d3d;
  }
  
  /* Tabs buttons */
  
  section#tab {
    margin-top: 8em;
  }
  
  .tabs-button-container {
    background: var(--tertiary-color);
    border-radius: var(--radius);
    padding: 15px 24px;
    display: inline-flex;
    gap: clamp(10px, 4vw, 32px);
    width: 100%;
  }
  
  .tabs-button {
    color: var(--3rd-text-color);
    width: 50%;
  }
  
  .tabs-button.active {
    background: var(--secondary-color);
  }
  
  .tabs-content-container {
    margin-top: 6.5em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4.8em 3.2em;
  }
  
  .tabs-content-container img {
    border-radius: 15px;
    width: 100%;
  }
  
  .tabs-content {
    position: relative;
  }
  
  .tabs-content-detail {
    background: var(--hover-bg-color);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 18px;
    text-align: center;
    padding: 40px;
    opacity: 0;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 15px;
  }
  
  .tabs-content-detail h3 {
    font-weight: 500;
    font-size: clamp(16px, 2vw, 22px);
  }
  .tabs-content-detail p {
    font-weight: 400;
    font-size: clamp(12px, 2vw, 14px);
  }
  
  .tabs-content-detail-link {
    display: block;
    width: 38px;
    height: 38px;
    background: url(res/icon/ic-link.svg) no-repeat;
    background-position: center;
    background-size: contain;
    border-radius: 50%;
  }
  
  .tabs-content-detail:hover {
    opacity: 1;
  }
  
  @media screen and (max-width: 560px) {
    section {
      padding: 0 20px;
    }
    .bio {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  
    body {
      font-size: 7px;
    }
  
    .tabs-content-container {
      grid-template-columns: 100%;
      width: 100%;
    }
  }  
`

const jsCode = `
// Theme switcher
var themeSwicther = document.querySelector('.theme-switcher')
themeSwicther.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('is-dark')
})


// Switching tab button
var tabBtnContainer = document.querySelector('.tabs-button').parentElement

tabBtnContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('active') == false)
        e.target.classList.add('active')
    siblings(e.target).forEach(el => { el.classList.remove('active') }); 
})


function siblings(element) {
    const siblings = []
    var els = Array.from(element.parentElement.children)
    els.forEach(el => {
        if (el != element)  siblings.push(el)
    });
    return siblings
}
`


const htmlTextEditor = document.querySelector('#html-code')
const cssTextEditor = document.querySelector('#css-code')
const jsTextEditor = document.querySelector('#js-code')
const previewFrame = document.querySelector('#preview')

htmlTextEditor.value = htmlCode
cssTextEditor.value = cssCode
jsTextEditor.value = jsCode

previewCode()


const textEditor = [htmlTextEditor, cssTextEditor, jsTextEditor]

textEditor.forEach(e => {
    e.addEventListener('keyup', () => previewCode())
});

function previewCode() {
    previewFrame.contentDocument.body.innerHTML = `
    <head>
        <style>
            ${cssTextEditor.value}
        </style>
    </head>
    <body>
        ${htmlTextEditor.value}
    </body>`

    previewCode.contentWindow.eval(jsTextEditor.value)
}