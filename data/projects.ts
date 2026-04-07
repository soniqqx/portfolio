export interface Project {
  id: string;
  title: string;
  description: string;
  gradient: string;
  tools: string[];
  image?: string;
  role?: string | (string | { title: string; items: string[] })[];
  gallery?: string[];
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "pharmacy",
    title: "Pharmacy Inventory Management System",
    description: "ระบบเกี่ยวกับจัดการสต็อกยาในร้านขายยา เป็นการจัดการระบบสต็อกโดยมีการนำเข้าส่งออกระหว่างสาขา การสั่งซื้อ การรับสินค้า",
    gradient: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)",
    tools: ["Vue.js", "Express.js", "SQLite"],
    image: "/phramacy1.png",
    role: [
      "ออกแบบ Database Schema",
      {
        title: "พัฒนาระบบจัดการคลังสินค้า เช่น",
        items: [
          "Purchase Order (PO)",
          "Goods Receipt (GR)",
          "Stock Transfer Order (STO)",
          "Stock Transfer Shipment (STS)",
          "Branch Receive (BR)"
        ]
      },
      "พัฒนา Backend API สำหรับจัดการข้อมูลและเชื่อมต่อกับ Frontend",
      "ออกแบบและพัฒนา CRUD operations สำหรับการจัดการข้อมูลในระบบ"
    ],
    gallery: ["/phramacy2.png", "/phramacy3.png", "/pharmacy4.png", "/pharmacy5.png"],
  },
  {
    id: "skillmapping",
    title: "Skill Mapping System",
    description: "ระบบสำหรับอาจารย์ผู้สอนสามารถติดตามและประเมินทักษะของนักศึกษาแต่ละคนในแต่ละรายวิชาได้",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    tools: ["Vue.js", "NestJS", "MySQL"],
    image: "/skillmap4.png",
    role: ["พัฒนาส่วน Frontend UI",
      "เชื่อมต่อข้อมูลจาก Backend API",
      "นำข้อมูลมาประมวลผลและแสดงผลในรูปแบบ Stacked Bar Chart",
      "ใช้ D3.js สำหรับสร้าง Data Visualization เพื่อแสดงสัดส่วนของนักศึกษาที่ผ่านและไม่ผ่านเกณฑ์ในแต่ละชั้นปี"],
    gallery: ["/skillmap2.png", "/skillmap3.png", "/skillmap5.png"],
    githubUrl: "https://github.com/SahaphapM/faculty_course_frontend.git"
  },
  {
    id: "maiun",
    title: "Maiun Adventure",
    description: "เว็บเกมสำหรับเด็กอายุ 4–6 ปี เพื่อเสริมสร้างพัฒนาการด้านการคิดและการเรียนรู้ โดยออกแบบเกมที่ช่วยกระตุ้นการทำงานของสมองทั้งซีกซ้ายและซีกขวา",
    gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    tools: ["HTML", "CSS", "Javascript"],
    image: "/maiun1.png",
    role: ["ร่วมออกแบบแนวคิดของเกมและวาง Storyboard กับทีม",
      "พัฒนา Game Logic ด้วย JavaScript",
      "พัฒนาระบบการโต้ตอบภายในเกม"],
    gallery: ["/maiun2.png", "/maiun3.png", "/maiun4.png", "/maiun5.png"],
  },
  {
    id: "d-coffee",
    title: "Coffee Shop Management System",
    description: "ระบบบริหารจัดการร้านกาแฟ รองรับระบบขายหน้าร้าน (POS), การจัดการสต็อกสินค้า, การคำนวณและจ่ายเงินเดือนพนักงาน รวมถึงแดชบอร์ดสรุปรายรับรายจ่ายของร้าน",
    gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    tools: ["Vue.js", "NestJS", "MySQL"],
    image: "/dcoffee1.png",
    role: ["พัฒนาฟังก์ชัน จัดการข้อมูลพนักงาน (CRUD)",
      "พัฒนาฟังก์ชัน บันทึกชั่วโมงการทำงานของพนักงาน",
      "พัฒนาฟังก์ชัน คำนวณเงินเดือนตามจำนวนชั่วโมงการทำงานและอัตราค่าจ้างต่อชั่วโมง"],
    gallery: ["/dcoffee1.png", "/dcoffee2.png"],
  }
];
