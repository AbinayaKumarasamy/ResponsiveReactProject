import React from 'react';
import headerImage from '../assets/desk.jpeg'; 
import { useEffect } from 'react';
const PrivacyPolicy = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${headerImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="mt-[5rem] text-white text-4xl font-bold">Privacy Policy</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 lg:px-32">
        <h2 className="text-2xl font-bold mb-4">Terms and Condition</h2>
        <p className="mb-4">
          "Affiliates" means any entity that directly or indirectly controls, is controlled by, or is under common control with the subject entity.
          <br/>
          "Consulting Services" means the professional services we provide to you, including training, installation, integration, and more.
          <br/>
          "Content" means the text, pictures, files, links, geolocation data, reports, and other information or material posted, transmitted, or stored through the Services.
          <br/>
          "Documentation" means the user guides, online help, training materials, and any other documentation made available to User regarding use of the Service.
          <br/>
          "LMS Services" means services and materials relating to structuring and presenting online courses for Authorized Users.
          <br/>
          "Subscriber" refers to you, the purchaser of the Services, including your affiliates, agents, representatives, employees, independent contractors, or any other person authorized to act on your behalf.
          <br/>
          "User" means the Subscriber and any other person authorized by the Subscriber to use the Services on the Subscriber's behalf.
          <br/>
          "Website" means the Skill Lake website at www.skilllake.com.
          <br/>
          "You" and "your" refer to Subscribers and Users.
        </p>

        <p className="mb-4">
          Users need to sign up for an account by providing all required information in order to access or use the Services. If you represent an organization and wish to use the Services for internal use, an identified member of your organization is required to provide account details. You agree to provide true, accurate, current, and complete information about yourself as prompted by the sign-up process and to maintain and promptly update the information provided during sign-up to keep it true, accurate, current, and complete.
          <br/>
          If you connect to any Services through a third-party service, you grant us permission to access, use, and store your information, such as login credentials, for the service, as permitted by its policies.
          <br/>
          You must register for an account to access portions of the Services. You agree that the information provided for purposes of account registration is accurate and will be kept accurate and up-to-date at all times. You are solely responsible for maintaining the confidentiality of your account and password and accept responsibility for all activities that occur under the account. You will not share passwords, authentication credentials, or other means of account access with any third party, except authorized Users.
          <br/>
          You agree to notify Fingent immediately of any actual or suspected unauthorized use of your account or any other breach of security. Fingent will not be liable for any losses or damages arising from failure to comply with the above requirements. You will be held liable for losses or damages incurred by Fingent or any third party due to someone using your account or password.
          <br/>
          Fingent is concerned about the safety and privacy of all its Users, especially children. For this reason, children (under the age of 18) are not permitted to use these services without the supervision of an adult or legal guardian. All parties involved should exercise caution and discretion before sharing any credit card information, passwords, account numbers, or any other relevant personal information. User acknowledges and agrees that Fingent will not be held responsible or liable for any content posted by Users or for any communication or dispute that arises between User and any third parties.
          <br/>
          You agree by registering that you are legally able to enter into this agreement. Among other things, this means (1) if you are registering for an individual account, you must be an individual at least eighteen (18) years of age enrolling under your own name and (2) if you are a designated user registering for a business license/account, you must be a bona fide employee or independent contractor of the business entity in whose name the license/account is held, and you must be authorized to bind the business entity under the name of this agreement.
        </p>

        <h2 className="text-2xl font-bold mb-4">Subscription Fees and Payment</h2>
        <p className="mb-4">
          Users agree to pay all subscription fees specified upon your subscription at the time you purchase. Current pricing for subscription plans is available on the Website. Users shall pay those fees via a valid, up-to-date credit card number or other payment information upon request. Charges must be paid in advance, either annually or in accordance with any different billing frequency stated in the applicable order. If we do not receive any payment when due, we will notify you and reserve the right to suspend access to the Services. We reserve the right to modify any plan, including price, at the end of any subscription period by providing at least sixty (60) days prior notice to Subscribers.
        </p>
        <p className="mb-4">
          "Affiliates" means any entity that directly or indirectly controls, is controlled by, or is under common control with the subject entity.
          <br/>
          "Consulting Services" means the professional services we provide to you, including training, installation, integration, and more.
          <br/>
          "Content" means the text, pictures, files, links, geolocation data, reports, and other information or material posted, transmitted, or stored through the Services.
          <br/>
          "Documentation" means the user guides, online help, training materials, and any other documentation made available to User regarding use of the Service.
          <br/>
          "LMS Services" means services and materials relating to structuring and presenting online courses for Authorized Users.
          <br/>
          "Subscriber" refers to you, the purchaser of the Services, including your affiliates, agents, representatives, employees, independent contractors, or any other person authorized to act on your behalf.
          <br/>
          "User" means the Subscriber and any other person authorized by the Subscriber to use the Services on the Subscriber's behalf.
          <br/>
          "Website" means the Skill Lake website at www.skilllake.com.
          <br/>
          "You" and "your" refer to Subscribers and Users.
        </p>

        <h2 className="text-2xl font-bold mb-4">User Sign Up and Account Obligations</h2>
        <p className="mb-4">
          Users need to sign up for an account by providing all required information in order to access or use the Services. If you represent an organization and wish to use the Services for internal use, an identified member of your organization is required to provide account details. You agree to provide true, accurate, current, and complete information about yourself as prompted by the sign-up process and to maintain and promptly update the information provided during sign-up to keep it true, accurate, current, and complete.
          <br/>
          If you connect to any Services through a third-party service, you grant us permission to access, use, and store your information, such as login credentials, for the service, as permitted by its policies.
          <br/>
          You must register for an account to access portions of the Services. You agree that the information provided for purposes of account registration is accurate and will be kept accurate and up-to-date at all times. You are solely responsible for maintaining the confidentiality of your account and password and accept responsibility for all activities that occur under the account. You will not share passwords, authentication credentials, or other means of account access with any third party, except authorized Users.
          <br/>
          You agree to notify Fingent immediately of any actual or suspected unauthorized use of your account or any other breach of security. Fingent will not be liable for any losses or damages arising from failure to comply with the above requirements. You will be held liable for losses or damages incurred by Fingent or any third party due to someone using your account or password.
          <br/>
          Fingent is concerned about the safety and privacy of all its Users, especially children. For this reason, children (under the age of 18) are not permitted to use these services without the supervision of an adult or legal guardian. All parties involved should exercise caution and discretion before sharing any credit card information, passwords, account numbers, or any other relevant personal information. User acknowledges and agrees that Fingent will not be held responsible or liable for any content posted by Users or for any communication or dispute that arises between User and any third parties.
          <br/>
          You agree by registering that you are legally able to enter into this agreement. Among other things, this means (1) if you are registering for an individual account, you must be an individual at least eighteen (18) years of age enrolling under your own name and (2) if you are a designated user registering for a business license/account, you must be a bona fide employee or independent contractor of the business entity in whose name the license/account is held, and you must be authorized to bind the business entity under the name of this agreement.
        </p>

        <h2 className="text-2xl font-bold mb-4">Subscription Fees and Payment</h2>
        <p className="mb-4">
          Users agree to pay all subscription fees specified upon your subscription at the time you purchase. Current pricing for subscription plans is available on the Website. Users shall pay those fees via a valid, up-to-date credit card number or other payment information upon request. Charges must be paid in advance, either annually or in accordance with any different billing frequency stated in the applicable order. If we do not receive any payment when due, we will notify you and reserve the right to suspend access to the Services. We reserve the right to modify any plan, including price, at the end of any subscription period by providing at least sixty (60) days prior notice to Subscribers.
        </p>
        <p className="mb-4">
          "Affiliates" means any entity that directly or indirectly controls, is controlled by, or is under common control with the subject entity.
          <br/>
          "Consulting Services" means the professional services we provide to you, including training, installation, integration, and more.
          <br/>
          "Content" means the text, pictures, files, links, geolocation data, reports, and other information or material posted, transmitted, or stored through the Services.
          <br/>
          "Documentation" means the user guides, online help, training materials, and any other documentation made available to User regarding use of the Service.
          <br/>
          "LMS Services" means services and materials relating to structuring and presenting online courses for Authorized Users.
          <br/>
          "Subscriber" refers to you, the purchaser of the Services, including your affiliates, agents, representatives, employees, independent contractors, or any other person authorized to act on your behalf.
          <br/>
          "User" means the Subscriber and any other person authorized by the Subscriber to use the Services on the Subscriber's behalf.
          <br/>
          "Website" means the Skill Lake website at www.skilllake.com.
          <br/>
          "You" and "your" refer to Subscribers and Users.
        </p>

        <p className="mb-4">
          Users need to sign up for an account by providing all required information in order to access or use the Services. If you represent an organization and wish to use the Services for internal use, an identified member of your organization is required to provide account details. You agree to provide true, accurate, current, and complete information about yourself as prompted by the sign-up process and to maintain and promptly update the information provided during sign-up to keep it true, accurate, current, and complete.
          <br/>
          If you connect to any Services through a third-party service, you grant us permission to access, use, and store your information, such as login credentials, for the service, as permitted by its policies.
          <br/>
          You must register for an account to access portions of the Services. You agree that the information provided for purposes of account registration is accurate and will be kept accurate and up-to-date at all times. You are solely responsible for maintaining the confidentiality of your account and password and accept responsibility for all activities that occur under the account. You will not share passwords, authentication credentials, or other means of account access with any third party, except authorized Users.
          <br/>
          You agree to notify Fingent immediately of any actual or suspected unauthorized use of your account or any other breach of security. Fingent will not be liable for any losses or damages arising from failure to comply with the above requirements. You will be held liable for losses or damages incurred by Fingent or any third party due to someone using your account or password.
          <br/>
          Fingent is concerned about the safety and privacy of all its Users, especially children. For this reason, children (under the age of 18) are not permitted to use these services without the supervision of an adult or legal guardian. All parties involved should exercise caution and discretion before sharing any credit card information, passwords, account numbers, or any other relevant personal information. User acknowledges and agrees that Fingent will not be held responsible or liable for any content posted by Users or for any communication or dispute that arises between User and any third parties.
          <br/>
          You agree by registering that you are legally able to enter into this agreement. Among other things, this means (1) if you are registering for an individual account, you must be an individual at least eighteen (18) years of age enrolling under your own name and (2) if you are a designated user registering for a business license/account, you must be a bona fide employee or independent contractor of the business entity in whose name the license/account is held, and you must be authorized to bind the business entity under the name of this agreement.
        </p>
        <p className="mb-4">
          Users agree to pay all subscription fees specified upon your subscription at the time you purchase. Current pricing for subscription plans is available on the Website. Users shall pay those fees via a valid, up-to-date credit card number or other payment information upon request. Charges must be paid in advance, either annually or in accordance with any different billing frequency stated in the applicable order. If we do not receive any payment when due, we will notify you and reserve the right to suspend access to the Services. We reserve the right to modify any plan, including price, at the end of any subscription period by providing at least sixty (60) days prior notice to Subscribers.
        </p>
        <p className="mb-4">
          "Affiliates" means any entity that directly or indirectly controls, is controlled by, or is under common control with the subject entity.
          <br/>
          "Consulting Services" means the professional services we provide to you, including training, installation, integration, and more.
          <br/>
          "Content" means the text, pictures, files, links, geolocation data, reports, and other information or material posted, transmitted, or stored through the Services.
          <br/>
          "Documentation" means the user guides, online help, training materials, and any other documentation made available to User regarding use of the Service.
          <br/>
          "LMS Services" means services and materials relating to structuring and presenting online courses for Authorized Users.
          <br/>
          "Subscriber" refers to you, the purchaser of the Services, including your affiliates, agents, representatives, employees, independent contractors, or any other person authorized to act on your behalf.
          <br/>
          "User" means the Subscriber and any other person authorized by the Subscriber to use the Services on the Subscriber's behalf.
          <br/>
          "Website" means the Skill Lake website at www.skilllake.com.
          <br/>
          "You" and "your" refer to Subscribers and Users.
        </p>
        <p className="mb-4">
          Users need to sign up for an account by providing all required information in order to access or use the Services. If you represent an organization and wish to use the Services for internal use, an identified member of your organization is required to provide account details. You agree to provide true, accurate, current, and complete information about yourself as prompted by the sign-up process and to maintain and promptly update the information provided during sign-up to keep it true, accurate, current, and complete.
          <br/>
          If you connect to any Services through a third-party service, you grant us permission to access, use, and store your information, such as login credentials, for the service, as permitted by its policies.
          <br/>
          You must register for an account to access portions of the Services. You agree that the information provided for purposes of account registration is accurate and will be kept accurate and up-to-date at all times. You are solely responsible for maintaining the confidentiality of your account and password and accept responsibility for all activities that occur under the account. You will not share passwords, authentication credentials, or other means of account access with any third party, except authorized Users.
          <br/>
          You agree to notify Fingent immediately of any actual or suspected unauthorized use of your account or any other breach of security. Fingent will not be liable for any losses or damages arising from failure to comply with the above requirements. You will be held liable for losses or damages incurred by Fingent or any third party due to someone using your account or password.
          <br/>
          Fingent is concerned about the safety and privacy of all its Users, especially children. For this reason, children (under the age of 18) are not permitted to use these services without the supervision of an adult or legal guardian. All parties involved should exercise caution and discretion before sharing any credit card information, passwords, account numbers, or any other relevant personal information. User acknowledges and agrees that Fingent will not be held responsible or liable for any content posted by Users or for any communication or dispute that arises between User and any third parties.
          <br/>
          You agree by registering that you are legally able to enter into this agreement. Among other things, this means (1) if you are registering for an individual account, you must be an individual at least eighteen (18) years of age enrolling under your own name and (2) if you are a designated user registering for a business license/account, you must be a bona fide employee or independent contractor of the business entity in whose name the license/account is held, and you must be authorized to bind the business entity under the name of this agreement.
        </p>

        <h2 className="text-2xl font-bold mb-4">Subscription Fees and Payment</h2>
        <p className="mb-4">
          Users agree to pay all subscription fees specified upon your subscription at the time you purchase. Current pricing for subscription plans is available on the Website. Users shall pay those fees via a valid, up-to-date credit card number or other payment information upon request. Charges must be paid in advance, either annually or in accordance with any different billing frequency stated in the applicable order. If we do not receive any payment when due, we will notify you and reserve the right to suspend access to the Services. We reserve the right to modify any plan, including price, at the end of any subscription period by providing at least sixty (60) days prior notice to Subscribers.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;