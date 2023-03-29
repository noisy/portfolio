<template>
  <CoverImage :url="`@/images/projects/${project.thumbnail}`" />

  <div class="section-row">
    <h3 class="section-title">Project background</h3>
    <p>
      CastoPro is a loyalty program for professionals offered by Castorama, a
      leading home improvement retailer in Poland.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">My role in this project</h3>
    <p>
      As a part of my recruitment process for a prominent Polish analytics
      company, I was tasked with testing the CastoPro website. The objective was
      to find an error on the website within a timeframe of 48 hours. I was
      provided with three pieces of information, which were: the CastoPro
      website link, timeframe, and the task.
    </p>
    <p>
      <i
        >Disclaimer: CastoPro was selected as a case study due to its public
        accessibility and the fact that none of the identified issues were
        security threats.</i
      >
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Challenges</h3>
    <p>
      Throughout the project, I faced several challenges due to the lack of
      information and specific requirements. With no clear task description, I
      had to make assumptions on whether to test the entire website or just a
      specific page. Given that the main page was relatively simple, I decided
      to focus on testing the entire login and registration pages instead, as
      these pages are often very error-prone. Additionally, no specific testing
      environment or responsive version was requested.
    </p>
    <p>
      To address these challenges, I established the following requirements:
    </p>
    <ul>
      <li>The website's <b>functionality should work</b> seamlessly.</li>
      <li>
        The website should be able to handle <b>negative scenarios</b> where
        users fail to provide all the required data in the fields, such as
        incomplete forms or incorrect input.
      </li>
      <li>
        In such cases, the website should provide easy-to-understand
        <b>feedback to assist the user</b>.
      </li>
      <li>
        The website should be thoroughly tested on both
        <b>desktop and mobile</b>
        browsers to ensure optimal performance on all devices.
      </li>
      <li>
        Since the website targets the Polish market, it was important to
        prioritize testing on popular web browsers used in Poland, namely
        <b>Google Chrome</b> and <b>Mozilla Firefox</b>, which together
        represent over
        <a
          href="https://web.archive.org/web/20230329150834/https://www.similarweb.com/browsers/poland/"
          >82% of the Polish market share</a
        >.
      </li>
    </ul>
  </div>

  <div class="section-row">
    <h3 class="section-title">The task</h3>
    <p>
      I noticed only one minor technical error on the main page, so I assumed
      this task was about the whole site. I also decided to use the most popular
      web browser (Chrome) and check CastoPro on smaller widths.
    </p>
    <p>
      Initially, I divided the task into static pages and forms. Part one was
      self-explanatory, as pages such as "Regulations," "FAQ," "Benefits," and
      "Privacy Policy" had no interactive elements. Testing these pages involved
      general checks of the entire page, as well as verifying the correctness of
      the links and the behavior of the pages at different window widths.
      Additionally, the mobile version of the top drop-down menu was included in
      this category.
    </p>
    <p>
      Forms were a different story. In this case, both the registration and
      login forms were found to be imperfect. Despite having access to only a
      limited number of real phone numbers, I was able to perform tests to the
      best of my ability. The most interesting part of the testing came when I
      began exploring negative paths, as both forms proved to be like
      minefields, with numerous issues to address. Overall, this part of the
      task was a lot of fun!
    </p>
    <p>
      Finally, I decided to divide all the cases into more specific categories.
      I have listed them all in order of importance to the end user:
    </p>
    <ul>
      <li>
        Main page
        <ul>
          <li>
            <a
              href="#issue1"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="issue"
            >
              The element <code>&lt;div class="container"&gt;</code> was not
              closed
            </a>
            <div class="collapse" id="issue1">
              <p>
                <strong>Description:</strong> In the code of the page
                <code>/pl/home</code>, the element
                <code>&lt;div class="container"&gt;</code> was not properly
                closed with <code>&lt;/div&gt;</code>.
              </p>
            </div>
          </li>
        </ul>
      </li>
      <li>
        Registration
        <ul>
          <li>
            <a
              data-bs-toggle="collapse"
              href="#issue2"
              aria-expanded="false"
              aria-controls="issue"
            >
              No information about required fields during registration
            </a>
            <div class="collapse" id="issue2">
              <p>
                <strong>Description:</strong> There are no marked required
                fields on page <code>/pl/register</code>.
              </p>
              <p><strong>Steps to reproduce:</strong></p>
              <ol>
                <li>Open page <code>/pl/register</code>.</li>
              </ol>
              <p>
                <strong>Actual result:</strong> No information about required
                fields.
              </p>
              <p>
                <strong>Expected result:</strong> Required fields are marked
                (e.g., asterisks with a legend).
              </p>
              <p><strong>Screenshot:</strong></p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/02.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/02.png"
                    alt="CastoPro02"
                    style="max-width: 100%"
                /></a>
              </p>
            </div>
          </li>
          <li>
            <a
              data-bs-toggle="collapse"
              href="#issue3"
              aria-expanded="false"
              aria-controls="issue"
            >
              The registration page does not check all required fields
              simultaneously
            </a>
            <div class="collapse" id="issue3">
              <p>
                <strong>Description:</strong> Page
                <code>/pl/register</code> does not check all required fields
                simultaneously. The <code>E-mail</code> is checked first, then
                the phone number (<code>Telefon</code>) and finally the first
                name (<code>Imię</code>) with the last name
                (<code>Nazwisko</code>).
              </p>
              <p><strong>Steps to reproduce:</strong></p>
              <ol>
                <li>Open page <code>/pl/register</code>.</li>
                <li>
                  Click the button <code>DALEJ</code> (without filling in the
                  fields).
                </li>
                <li>
                  Fill the <code>E-mail</code> field with the e-mail address
                  (e.g., <code>castorama@gmail.com</code>).
                </li>
                <li>Click the button <code>DALEJ</code>.</li>
                <li>
                  Fill the <code>E-mail</code> field with the e-mail address
                  (e.g., <code>castorama@gmail.com</code>).
                </li>
                <li>
                  Fill the Phone number field (<code>Telefon</code>) with the
                  phone number (e.g., <code>123456780</code>).
                </li>
                <li>Click the button <code>DALEJ</code>.</li>
              </ol>
              <p>
                <strong>Actual result:</strong> Each subsequent error message
                applies to only one field.
              </p>
              <p>
                <strong>Expected result:</strong> All messages regarding
                incorrectly completed fields appear simultaneously.
              </p>
              <p><strong>Screenshots:</strong></p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/03a.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/03a.png"
                    alt="CastoPro03a"
                    style="max-width: 100%"
                /></a>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/03b.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/03b.png"
                    alt="CastoPro03b"
                    style="max-width: 100%"
                /></a>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/03c.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/03c.png"
                    alt="CastoPro03c"
                    style="max-width: 100%"
                /></a>
              </p>
            </div>
          </li>
          <li>
            <a
              data-bs-toggle="collapse"
              href="#issue4"
              aria-expanded="false"
              aria-controls="issue"
            >
              The correctness of the e-mail on the registration page is
              validated only after entering the phone number
            </a>
            <div class="collapse" id="issue4">
              <p>
                <strong>Description:</strong> On page <code>/pl/register</code>,
                the correctness of the written e-mail is validated only after
                entering the phone number. Before that, any e-mail in the format
                <code>x@x.xx</code> is correct:
              </p>
              <ul>
                <li>
                  wrong domain (<code>.cmo</code> instead of <code>.com</code>,
                  <code>.lp</code> instead of <code>.pl</code>, also
                  <code>.comm</code>)
                </li>
                <li>
                  domains that don't exist (e.g., <code>@gmail.com.pl</code>)
                </li>
              </ul>
              <p><strong>Steps to reproduce:</strong></p>
              <ol>
                <li>Open page <code>/pl/register</code>.</li>
                <li>
                  Fill the <code>E-mail</code> field with the incorrect e-mail
                  address (e.g., <code>castorama@gmail.cmo</code>).
                </li>
                <li>Click the button <code>DALEJ</code>.</li>
                <li>
                  Fill the <code>E-mail</code> field with the incorrect e-mail
                  address (e.g., <code>castorama@gmail.cmo</code>).
                </li>
                <li>
                  Fill the phone number field (<code>Telefon</code>) with the
                  phone number (e.g., <code>123456780</code>).
                </li>
                <li>Click the button <code>DALEJ</code>.</li>
              </ol>
              <p>
                <strong>Actual result:</strong> Information about an incorrect
                e-mail appears only after entering the phone number.
              </p>
              <p>
                <strong>Expected result:</strong> Information about an incorrect
                e-mail appears even without entering a phone number.
              </p>
              <p><strong>Screenshot:</strong></p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/04.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/04.png"
                    alt="CastoPro04"
                    style="max-width: 100%"
                /></a>
              </p>
            </div>
          </li>
        </ul>
      </li>
      <li>
        Login
        <ul>
          <li>
            <a
              data-bs-toggle="collapse"
              href="#issue5"
              aria-expanded="false"
              aria-controls="issue"
            >
              The login page does not check both login fields simultaneously
            </a>
            <div class="collapse" id="issue5">
              <p>
                <strong>Description:</strong> Page
                <code>/pl/auth/login</code> does not check both fields
                simultaneously. The password <code>Hasło</code> is checked
                first, and then the e-mail (<code>Adres e-mail</code>).
              </p>
              <p><strong>Steps to reproduce:</strong></p>
              <ol>
                <li>Open page <code>pl/auth/login</code>.</li>
                <li>Click login button <code>ZALOGUJ MNIE</code>.</li>
                <li>Enter any password in the <code>Hasło</code> field.</li>
                <li>Click login button <code>ZALOGUJ MNIE</code>.</li>
              </ol>
              <p>
                <strong>Actual result:</strong> Error message about wrong email
                or password. <strong>Expected result:</strong> Error messages
                for both email and password fields.
              </p>
              <p><strong>Screenshots:</strong></p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/05a.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/05a.png"
                    alt="CastoPro05a"
                    style="max-width: 100%"
                /></a>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/05b.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/05b.png"
                    alt="CastoPro05b"
                    style="max-width: 100%"
                /></a>
              </p>
            </div>
          </li>
          <li>
            <a
              data-bs-toggle="collapse"
              href="#issue6"
              aria-expanded="false"
              aria-controls="issue"
            >
              Two formats of login errors
            </a>
            <div class="collapse" id="issue6">
              <p>
                <strong>Description:</strong> Login error messages on page
                <code>/pl/auth/login</code> have different graphical formats.
              </p>
              <p><strong>Steps to reproduce:</strong></p>
              <ol>
                <li>Open page <code>pl/auth/login</code>.</li>
                <li>
                  Enter the e-mail address in the
                  <code>Adres E-mail</code> field (e.g.,
                  <code>castorama@gmail.com</code>).
                </li>
                <li>
                  Click the login button <code>ZALOGUJ MNIE</code> (without
                  entering any password in the <code>Hasło</code> field).
                </li>
              </ol>
              <p>
                <strong>Actual result:</strong> Two error messages in different
                formats.
              </p>
              <p>
                <strong>Expected result:</strong> Two identical-looking
                messages.
              </p>
              <p><strong>Screenshot:</strong></p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/06.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/06.png"
                    alt="CastoPro06"
                    style="max-width: 100%"
                /></a>
              </p>
            </div>
          </li>
          <li>
            <a
              data-bs-toggle="collapse"
              href="#issue7"
              aria-expanded="false"
              aria-controls="issue"
            >
              Misleading error message during the password recovery when an
              e-mail is not in the database
            </a>
            <div class="collapse" id="issue7">
              <p>
                <strong>Description:</strong> On the page
                <code>/pl/auth/login</code>, when using the password recovery
                option, if a valid e-mail is entered but one in the database, an
                error appears that <code>this is not a valid e-mail</code>.
              </p>
              <p><strong>Steps to reproduce:</strong></p>
              <ol>
                <li>Open page <code>/pl/auth/login</code>.</li>
                <li>
                  Click the button <code>NIE PAMIĘTAM HASŁA</code> under the
                  login button <code>ZALOGUJ MNIE</code>.
                </li>
                <li>
                  Enter the e-mail address (not in the database) in the
                  <code>Adres E-mail</code> field (e.g.,
                  <code>castorama@gmail.com</code>).
                </li>
                <li>Click the send button <code>WYŚLIJ</code>.</li>
              </ol>
              <p><strong>Actual result:</strong> Not a valid e-mail message.</p>
              <p>
                <strong>Expected result:</strong> A message that a link has been
                sent if such an e-mail is in the database.
              </p>
              <p><strong>Screenshot:</strong></p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/07.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/07.png"
                    alt="CastoPro07"
                    style="max-width: 100%"
                /></a>
              </p>
            </div>
          </li>
        </ul>
      </li>
      <li>
        Responsive design
        <ul>
          <li>
            <a
              data-bs-toggle="collapse"
              href="#issue13"
              aria-expanded="false"
              aria-controls="issue"
            >
              The paragraph
              <code>Od 25 lat wspieramy Profesjonalistów</code> disappears below
              the 992px width
            </a>
            <div class="collapse" id="issue8">
              <p>
                <strong>Description:</strong> Page <code>/pl/home</code> below
                992px does not show the entire paragraph
                <code>Od 25 lat wspieramy Profesjonalistów</code>.
              </p>
              <p><strong>Steps to reproduce:</strong></p>
              <ol>
                <li>Open page <code>/pl/home</code>.</li>
                <li>Change the page width below 992px.</li>
              </ol>
              <p>
                <strong>Actual result:</strong> The entire paragraph disappears.
              </p>
              <p>
                <strong>Expected result:</strong> The paragraph adjusts to the
                new width.
              </p>
              <p><strong>Screenshot above 992px width:</strong></p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/08a.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/08a.png"
                    alt="CastoPro08a"
                    style="max-width: 100%"
                /></a>
              </p>
              <p><strong>Screenshot below 992px width:</strong></p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/08b.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/08b.png"
                    alt="CastoPro08b"
                    style="max-width: 100%"
                /></a>
              </p>
            </div>
          </li>
          <li>
            <a
              data-bs-toggle="collapse"
              href="#issue9"
              aria-expanded="false"
              aria-controls="issue"
            >
              The menu background is too short between 992px and 1098px width
            </a>
            <div class="collapse" id="issue9">
              <p>
                <strong>Description:</strong> On pages with a width between
                992px and 1098px, the background of the menu is too small for
                the registration link <code>REJESTRACJA</code>.
              </p>
              <p><strong>Steps to reproduce:</strong></p>
              <ol>
                <li>Open page <code>/pl/home</code>.</li>
                <li>Change the page width to between 992px and 1098px.</li>
              </ol>
              <p>
                <strong>Actual result:</strong> The menu is too small for the
                word <code>REJESTRACJA</code>.
              </p>
              <p>
                <strong>Expected result:</strong> The width of the menu includes
                all items.
              </p>
              <p><strong>Screenshot:</strong></p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/09.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/09.png"
                    alt="CastoPro09"
                    style="max-width: 100%"
                /></a>
              </p>
            </div>
          </li>
          <li>
            <a
              data-bs-toggle="collapse"
              href="#issue10"
              aria-expanded="false"
              aria-controls="issue"
            >
              The menu button overlaps the website logo below 284px width
            </a>
            <div class="collapse" id="issue10">
              <p>
                <strong>Description:</strong> On pages with a width below 284px,
                the top menu button overlaps the website logo.
              </p>
              <p><strong>Steps to reproduce:</strong></p>
              <ol>
                <li>Open page <code>/pl/home</code>.</li>
                <li>Change the page width below 284px.</li>
              </ol>
              <p>
                <strong>Actual result:</strong> The menu button overlaps the
                website logo.
              </p>
              <p>
                <strong>Expected result:</strong> The website logo shrinks, or
                the menu button is below the website logo.
              </p>
              <p><strong>Screenshot:</strong></p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/10.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/10.png"
                    alt="CastoPro10"
                    style="max-width: 100%"
                /></a>
              </p>
            </div>
          </li>
          <li>
            <a
              data-bs-toggle="collapse"
              href="#issue11"
              aria-expanded="false"
              aria-controls="issue"
            >
              Opening and closing the menu is not a button, but narrow elements
            </a>
            <div class="collapse" id="issue11">
              <p>
                <strong>Description:</strong> On pages with a width below 992px,
                there is a menu button in the upper right corner of the page
                instead of a full menu. This "button" is not an area but
                consists of three dashes that are hard to hit with the cursor.
                When the menu is open, there is the "X" with the same problem,
                which closes the menu.
              </p>
              <p><strong>Steps to reproduce:</strong></p>
              <ol>
                <li>Open page <code>/pl/home</code>.</li>
                <li>Change the page width below 992px.</li>
              </ol>
              <p>
                <strong>Actual result:</strong> Open and close menu items are
                not easy to click.
              </p>
              <p>
                <strong>Expected result:</strong> Open and close menu items are
                buttons or larger areas that are easier to click.
              </p>
              <p><strong>Screenshots:</strong></p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/11a.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/11a.png"
                    alt="CastoPro11a"
                    style="max-width: 100%"
                /></a>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/11b.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/11b.png"
                    alt="CastoPro11b"
                    style="max-width: 100%"
                /></a>
              </p>
            </div>
          </li>
        </ul>
      </li>
      <li>
        Website usability
        <ul>
          <li>
            <a
              data-bs-toggle="collapse"
              href="#issue12"
              aria-expanded="false"
              aria-controls="issue"
            >
              The regulations page does not scale below 456px width
            </a>
            <div class="collapse" id="issue12">
              <p>
                <strong>Description:</strong> The page
                <code>/pl/castopro-regulations</code> stops scaling below 456px
                width, and the table sticks out of the visible area.
              </p>
              <p><strong>Steps to reproduce:</strong></p>
              <ol>
                <li>Open page <code>/pl/castopro-regulations</code>.</li>
                <li>Change the page width below 456px.</li>
              </ol>
              <p>
                <strong>Actual result:</strong> The content of the page extends
                beyond the visible area.
              </p>
              <p>
                <strong>Expected result:</strong> The page adapts to the width
                of the screen.
              </p>
              <p><strong>Screenshot:</strong></p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/12.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/12.png"
                    alt="CastoPro12"
                    style="max-width: 100%"
                /></a>
              </p>
            </div>
          </li>
          <li>
            <a
              data-bs-toggle="collapse"
              href="#issue13"
              aria-expanded="false"
              aria-controls="issue"
            >
              The privacy policy page does not scale below 382px width
            </a>
            <div class="collapse" id="issue13">
              <p>
                <strong>Description:</strong> The page
                <code>/pl/privacy-policy</code> stops scaling below 382px width,
                and the table sticks out of the visible area.
              </p>
              <p><strong>Steps to reproduce:</strong></p>
              <ol>
                <li>Open page <code>/pl/privacy-policy</code>.</li>
                <li>Change the page width below 382px.</li>
              </ol>
              <p>
                <strong>Actual result:</strong> The content of the page extends
                beyond the visible area.
              </p>
              <p>
                <strong>Expected result:</strong> The page adapts to the width
                of the screen.
              </p>
              <p><strong>Screenshot:</strong></p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/13.png"
                  class="keychainify-checked"
                  ><img
                    src="https://raw.githubusercontent.com/lukmarcus/Today-I-Learned/main/Test_Case_Studies/CastoPro/13.png"
                    alt="CastoPro13"
                    style="max-width: 100%"
                /></a>
              </p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="section-row">
    <h3 class="section-title">What I learned</h3>
    <p>
      This task reminded me that in the real world, we don't always have access
      to perfect information or clear requirements. However, this lack of
      clarity should not be an excuse for not performing the necessary job,
      especially when faced with urgency. In such situations, relying on one's
      own judgment and knowledge about industry standards can serve as useful
      guidelines for identifying what truly needs to be done.
    </p>
    <p>
      On a more practical note, this task reminded me to always plan extra time
      for testing negative paths, as they often contain the most difficult and
      tricky bugs to identify and report.
    </p>
  </div>
</template>

<script setup lang="ts">
import { CoverImage } from "@/components";
import type { IProject, ITestimonial } from "@/types";
import { Collapse } from "bootstrap";
defineProps<{
  project: IProject;
  testimonials: ITestimonial[];
}>();

var collapseElementList = [].slice.call(document.querySelectorAll(".collapse"));
collapseElementList.map(function (collapseEl) {
  return new Collapse(collapseEl);
});
</script>
