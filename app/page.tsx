// import Double from "./components/main/Double";
import Hero from "./components/main/Hero";
import Introduction from "./components/main/Introduction";
import Single from "./components/main/Single";

export default function Home() {
  return (
    <main className="md:relative w-screen pt-14">
      <Hero/>
      <div className=" py-40">
        <Introduction/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-40 px-4 md:px-32">
        <Single heading='data collection and consent' listone="Clearly define the purpose of data collection and obtain explicit consent from individuals before collecting their personal information." 
        listtwo="Provide transparent information about the types of data being collected, how it will be used, and any third parties it may be shared with." 
        listthree="Allow individuals to opt in or opt out of data collection and processing activities." 
        listfour="Implement mechanisms for individuals to review, update, or delete their data upon request." 
        pic="/single1.png"/>

        <Single heading='data minimization' listone="Collect and retain only the minimum amount of personal data necessary to fulfil the specified purpose."
        listtwo="Regularly review data storage practices and delete outdated or unnecessary data." 
        listthree="Anonymize or pseudonymise personal data whenever possible to reduce the risk of identification." listfour="" pic="/single3.png"/>
        
        <Single heading='data security' listone=" Implement robust security measures to protect personal data from unauthorised access, disclosure, alteration, or destruction." 
        listtwo="Use encryption, access controls, and authentication mechanisms to safeguard sensitive data." 
        listthree="Regularly update and patch systems and software to mitigate known security vulnerabilities" 
        listfour="Conduct regular security audits and assessments to identify and remediate security risks." pic="/single2.png"/>

        <Single heading='data transparency and accountability' listone="Maintain clear and accessible privacy policies that outline how personal data is collected, used, and protected." 
        listtwo="Provide individuals with access to their data and information about how it is being processed." 
        listthree="Designate a Data Protection Officer (DPO) or privacy team responsible for ensuring compliance with data privacy regulations." 
        listfour="Keep detailed records of data processing activities, including purposes, legal bases, and data sharing agreements." 
        pic="/double2.png"/>

        <Single heading='data sharing and third-party partnership' listone="Limit data sharing with third parties to only what is necessary for business purposes and obtain explicit consent when sharing sensitive data." 
        listtwo="Conduct due diligence on third-party partners to ensure they have adequate data protection measures in place." 
        listthree="Use data processing agreements or contracts to outline the responsibilities of third-party partners regarding data privacy and security." 
        listfour="Monitor and audit third-party data processing activities to ensure compliance with privacy regulations." 
        pic="/double3.png"/>

        <Single heading='data breach response and notification' listone="Develop and maintain a data breach response plan outlining procedures for detecting, assessing, and responding to data breaches." 
        listtwo="Establish communication protocols for notifying affected individuals, regulatory authorities, and other stakeholders in the event of a data breach." 
        listthree="Conduct regular data breach drills and simulations to test the effectiveness of the response plan and ensure readiness to handle incidents." 
        listfour="Document and report data breaches by legal requirements and regulatory guidelines." 
        pic="/double6.png"/>
        
        <Single heading='data subject right' listone="Inform individuals about their rights regarding their data, including the right to access, rectify, delete, or restrict the processing of their data." 
        listtwo="Establish processes for handling data subject requests promptly and transparently." 
        listthree="Provide individuals with mechanisms to exercise their data subject rights easily, such as online forms or customer support channels." 
        listfour="Educate employees about data subject rights and ensure they understand their responsibilities for handling data subject." pic="/single5.png"/>
        
        <Single heading='privacy by design and default' listone="Integrate privacy considerations into the design and development of products, services, and systems from the outset." 
        listtwo="Implement privacy-enhancing technologies and measures to minimize the risk of privacy violations." 
        listthree="Default to the highest level of privacy protection by limiting data collection, retention, and sharing by default." 
        listfour="Conduct privacy impact assessments (PIAs) for new projects or initiatives to identify and mitigate privacy risks." pic="/single4.png"/>
        
        <Single heading='training and awareness' listone="Provide regular training and awareness programs for employees on data privacy best practices, policies, and regulations." 
        listtwo="Ensure employees understand their roles and responsibilities in protecting personal data and respecting privacy rights." 
        listthree="Conduct phishing awareness training to educate employees about common tactics used in data breaches and social engineering attacks." 
        listfour="Encourage a culture of privacy and accountability throughout the organization through leadership support and recognition of privacy champions." pic="/single6.png"/>

        <Single heading='compliance and governance' listone="Stay informed about relevant data protection regulations, such as GDPR, CCPA, and HIPAA, and ensure compliance with applicable laws." 
        listtwo="Establish internal controls and procedures to monitor and enforce compliance with data privacy regulations." 
        listthree="Conduct regular audits and assessments to evaluate compliance with data privacy policies and regulations." 
        listfour="Maintain documentation of compliance efforts, including policies, procedures, and audit reports, to demonstrate accountability to regulators and stakeholders." 
        pic="/double8.png"/>
        </div>



      </div>
    </main>
  );
}
