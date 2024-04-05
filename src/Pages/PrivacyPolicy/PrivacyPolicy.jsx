import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    handleScrollTop();
  }, []);

  return (
    <div className={styles.container}>
      <div className="wrapper">
        <NavBar />
      </div>
      <br /><br /><br /><br />
      <h3>Privacy Policy</h3>
      <p>
        This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use our Service and tells you about your rights and how the law protects you.
      </p>
      <p>
        We use your data to provide and improve our Service. By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy.
      </p>
      <h5>Information Collection and Use</h5>
      <p>
        For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.
      </p>
      <h5>Log Data</h5>
      <p>
        We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
      </p>
      <h5>Cookies</h5>
      <p>
        Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your device.
      </p>
      <p>
        Our website uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
      </p>
      <h5>Service Providers</h5>
      <p>
        We may employ third-party companies and individuals due to the following reasons:
      </p>
      <ul>
        <li>To facilitate our Service;</li>
        <li>To provide the Service on our behalf;</li>
        <li>To perform Service-related services; or</li>
        <li>To assist us in analyzing how our Service is used.</li>
      </ul>
      <p>
        We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
      </p>
      <h5>Security</h5>
      <p>
        We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
      </p>
      <h5>Links to Other Sites</h5>
      <p>
        Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
      </p>
      <h5>Changes to This Privacy Policy</h5>
      <p>
        We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
      </p>
      <p>We have updated our Privacy Policy to comply with the latest data protection regulations, including the General Data Protection Regulation (GDPR) in the European Union. Here are the main changes:
        <br />
        1. <strong>Information Collection and Use</strong>: We have updated the information we collect from users, including the types of data we collect, the purpose of the collection, and the legal basis for the collection.
        <br />
        2. <strong>Log Data</strong>: We have updated the information we collect from users' devices when they visit our Service, including the types of data we collect, the purpose of the collection, and the legal basis for the collection.
        <br />
        3. <strong>Cookies</strong>: We have updated the information about the cookies we use, including the types of cookies we use, the purpose of the cookies, and the legal basis for the use of cookies.
        <br />
        4. <strong>Service Providers</strong>: We have updated the information about the third-party service providers we use to assist us in operating our Service, including the types of data we share with these service providers, the purpose of the sharing, and the legal basis for the sharing.
        <br />
        5. <strong>Security</strong>: We have updated the information about the security measures we use to protect the Personal Information of users of our Service.
        <br />
        6. <strong>Links to Other Sites</strong>: We have updated the information about the links we provide to other websites, including the types of links we provide, the purpose of the links, and the legal basis for the provision of the links.
        <br />
        7. <strong>Changes to This Privacy Policy:</strong> We have updated the information about the changes we may make to our Privacy Policy and the procedures we will follow to notify users of any changes.
        <br />
        Please note that this Privacy Policy is effective as of [Date] and will replace any previous Privacy Policy we had. By continuing to use our Service, you agree to be bound by this Privacy Policy. If you have any questions about this Privacy Policy, please contact us.
        <br />
        For more information about GDPR, please visit the official website of the European Commission: https://ec.europa.eu/info/law/law-topic/data-protection/eu-general-data-protection-regulation_en.
        <br />
        For more information about data protection in the United States, please visit the official website of the Federal Trade Commission: https://www.ftc.gov/privacy-initiatives/business-guide-data-security.
        <br />
        For more information about data protection in other jurisdictions, please visit the official websites of the relevant data protection authorities.**Contact Us**
        <br />
        If you have any questions about this Privacy Policy, please contact us at [Contact Information].
        <br />
        <strong>Legal Disclaimer</strong>
        <br />
        This Privacy Policy is subject to the laws and regulations of the jurisdiction in which our organization is located, and any disputes arising from this Privacy Policy will be governed by the laws and regulations of that jurisdiction.
        <br />
        This Privacy Policy does not create any contractual or legal rights for or on behalf of any party, and it does not create any obligations for us beyond those that we have already agreed to in our Terms of Service.
        <br />
        <strong>Thank You</strong>
        <br />
        We appreciate your attention to this Privacy Policy and your trust in our organization. We are committed to protecting your privacy and the confidentiality of your Personal Information.
        <br />
        Thank you for using our Service.
        <br />
        <strong>Copyright Notice</strong>
        <br />
        All icons used in designing this website were from
        <a href="https://www.flaticon.com/" title="Image icons"> Flaticon</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;