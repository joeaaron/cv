import luster from "./assets/logo_luster.png";
import learnpython from "./assets/learnpython.png";
import blog from "./assets/blog.png";

import dHome from "./assets/d_home.svg";
import dSkills from "./assets/d_skills.svg";
import dExp from "./assets/d_exp.svg";
import dWorks from "./assets/d_works.svg";
import dContact from "./assets/d_contact.svg";
import sGithub from "./assets/s_github.svg";
import sWeiBo from "./assets/s_wb.svg";
import sBlog from "./assets/s_blog.svg";
import sZh from "./assets/s_zh.svg";
import SGitee from "./assets/s_gitee.svg";
import SJianshu from "./assets/s_jianshu.svg";
import SCSDN from "./assets/s_csdn.svg";

export default {
  cn: {
    header: {
      langList: ["中", "英"],
      titleList: [
        {
          svg: dHome,
          title: "首页"
        },
        {
          svg: dSkills,
          title: "能力"
        },
        {
          svg: dExp,
          title: "经历"
        },
        {
          svg: dWorks,
          title: "作品集"
        },
        {
          svg: dContact,
          title: "联系我"
        }
      ]
    },
    footer: ["Released under the Apache License", "All Rights Reserved"],
    overview: {
      infoList: ["30岁", "硕士", "苏州", "在职"],
      quote:
        "不浮躁，不偏激，爱编程，爱CV，爱新技术，爱运动，执行力和学习能力都棒棒哒！",
      desList: [
        "天宇，系统软件工程师",
        "凌云光技术股份有限公司",
        "joeaaron007@gmail.com"
      ]
    },
    skill: {
      outCircleList: [
        {
          bg: {
            backgroundColor: "rgba(121,100,102,0.8)"
          },
          name: "C++"
        },
        {
          bg: {
            backgroundColor: "rgba(49,65,82,0.8)"
          },
          name: "OpenCV"
        },
        {
          bg: {
            backgroundColor: "rgba(193,131,106,0.8)"
          },
          name: "PCL"
        },
        {
          bg: {
            backgroundColor: "rgba(117,148,179,0.8)"
          },
          name: "Python"
        },
        {
          bg: {
            backgroundColor: "rgba(147,147,189,0.8)"
          },
          name: "ROS"
        },
        {
          bg: {
            backgroundColor: "rgba(172,223,159,0.8)"
          },
          name: "Linux"
        },
        {
          bg: {
            backgroundColor: "rgba(66,66,66,0.8)"
          },
          name: "小程序"
        },
        {
          bg: {
            backgroundColor: "rgba(71,83,94,0.8)"
          },
          name: "Vue"
        }
      ],
      innerCircleList: [
        {
          bg: {
            backgroundColor: "rgba(179,164,140,0.8)"
          },
          name: "CV"
        },
        {
          bg: {
            backgroundColor: "rgba(171,209,220,0.8)"
          },
          name: "ML"
        },
        {
          bg: {
            backgroundColor: "rgba(238,215,163,0.8)"
          },
          name: "Robot"
        },
        {
          bg: {
            backgroundColor: "rgba(207,184,178,0.8)"
          },
          name: "Hardware"
        }
      ],
      desList: [
        "我叫天宇，30岁，坐标苏州，是一名系统软件工程师，七年C++ CV从业经验。",
        "熟悉软件开发的整个流程，有较强的逻辑思维能力",
        "主要涉及技术：C++系统开发、计算机视觉、移动机器人自主导航、开源爱好者、Linux",
        "有良好的文档编写和代码书写规范，能独立解决问题、百折不挠、细节控"
      ],
      links: [
        {
          title: "● Github",
          des: "https://github.com/joeaaron",
          url: "https://github.com/joeaaron"
        },
        {
          title: "● 技术笔记",
          des: "https://joeaaron.github.io/",
          url: "https://joeaaron.github.io/"
        }
      ]
    },
    exp: {
      expList: [
        {
          title: "凌云光技术股份有限公司",
          time: "2020年3月~至今",
          post: "研发部/系统软件工程师",
          img: {
            backgroundImage: `url(${luster})`
          },
          contentList: [
            "使用高并发，多线程为(工业人工职能)提供解决方案",
            "负责编制与产品或项目相关的技术文档",
            "使用C++完成日常系统的部署及维护工作"
          ]
        },
        {
          title: "哈工大机器人集团",
          time: "2018年2月~2020年2月",
          post: "技术部/算法工程师",
          img: {},
          contentList: [
            "参加讨论相关项目需求、概要设计，并完成核心代码编写",
            "使用ROS、python、pytorch进行开发",
            "对代码持续重构优化，对系统不足进行分析，提高系统性能"
          ]
        }
      ]
    },
    works: {
      worksList: [
        {
          title: "LearningPython",
          des: "Python学习过程中的主要技术难点",
          url: "https://github.com/joeaaron/LearningPython",
          img: {
            src: `${learnpython}`,
            alt: "Python学习过程中的主要技术难点"
          }
        },
        {
          title: "个人博客网站",
          des: "天宇的技术博客网站",
          url: "https://joeaaron.github.io/",
          img: {
            src: `${blog}`,
            alt: "天宇的技术博客网站"
          }
        }
      ],
      viewMore: "前往GitHub上查看更多"
    },
    contact: {
      title: "联系我",
      desList1: ["灵感", "代码", "梦想", "未来"],
      desList2: [
        "喜欢尝试，期待新鲜事物",
        "编程即兴趣，兴趣即未来",
        "行路有良友，便是捷径",
        "带上我吧，一起看到更大的世界"
      ],
      download: "下载简历",
      fileList: [
        {
          title: "HTML版",
          url: ""
        },
        {
          title: "PDF版",
          url: ""
        }
      ],
      typeList: [
        {
          title: "GitHub",
          icon: sGithub,
          url: "https://github.com/joeaaron"
        },
        {
          title: "码云",
          icon: SGitee,
          url: "https://gitee.com/joeaaron007"
        },
        {
          title: "个人博客",
          icon: sBlog,
          url: "https://joeaaron.github.io"
        },
        {
          title: "简书",
          icon: SJianshu,
          url: "https://www.jianshu.com/u/d37149ca7539"
        },
        {
          title: "CSDN",
          icon: SCSDN,
          url: "https://blog.csdn.net/lxy_2011"
        },
        {
          title: "知乎",
          icon: sZh,
          url: "https://www.zhihu.com/people/sheng-huai-nan"
        },
        {
          title: "微博",
          icon: sWeiBo,
          url: "http://weibo.com/rainlvsky"
        }
      ]
    }
  },
  en: {
    header: {
      langList: ["CN", "EN"],
      titleList: [
        {
          svg: dHome,
          title: "home"
        },
        {
          svg: dSkills,
          title: "skills"
        },
        {
          svg: dExp,
          title: "exp"
        },
        {
          svg: dWorks,
          title: "works"
        },
        {
          svg: dContact,
          title: "contact"
        }
      ]
    },
    footer: ["Released under the Apache License", "All Rights Reserved"],
    overview: {
      infoList: ["30years", "M.S.", "Suzhou", "On Job"],
      quote:
        "Not impetuous, not extreme, love programming, love cv, love new technology, love sports, execution and learning ability are awesome!",
      desList: [
        "My name is Tian Yu, a Software engineer",
        "Luster technology co., LTD",
        "joeaaron007@gmail.com"
      ]
    },
    skill: {
      outCircleList: [
        {
          bg: {
            backgroundColor: "rgba(121,100,102,0.8)"
          },
          name: "C++"
        },
        {
          bg: {
            backgroundColor: "rgba(49,65,82,0.8)"
          },
          name: "OpenCV"
        },
        {
          bg: {
            backgroundColor: "rgba(193,131,106,0.8)"
          },
          name: "PCL"
        },
        {
          bg: {
            backgroundColor: "rgba(117,148,179,0.8)"
          },
          name: "Python"
        },
        {
          bg: {
            backgroundColor: "rgba(147,147,189,0.8)"
          },
          name: "ROS"
        },
        {
          bg: {
            backgroundColor: "rgba(172,223,159,0.8)"
          },
          name: "Linux"
        },
        {
          bg: {
            backgroundColor: "rgba(66,66,66,0.8)"
          },
          name: "MiniP"
        },
        {
          bg: {
            backgroundColor: "rgba(71,83,94,0.8)"
          },
          name: "Vue"
        }
      ],
      innerCircleList: [
        {
          bg: {
            backgroundColor: "rgba(179,164,140,0.8)"
          },
          name: "CV"
        },
        {
          bg: {
            backgroundColor: "rgba(171,209,220,0.8)"
          },
          name: "ML"
        },
        {
          bg: {
            backgroundColor: "rgba(238,215,163,0.8)"
          },
          name: "Robot"
        },
        {
          bg: {
            backgroundColor: "rgba(207,184,178,0.8)"
          },
          name: "Hardware"
        }
      ],
      desList: [
        "My name is Tian Yu, 30 years old, located in Suzhou, and I am a Software engineer with seven years of C++ CV experience.",
        "Familiar with the whole process of software development, with strong logical thinking ability",
        "Mainly involved in technology: C++ development, computer vision, robot navigation, open source enthusiasts, Linux",
        "Good documentation and code writing skills, able to solve problems independently, persistent and detail-oriented"
      ],
      links: [
        {
          title: "● Github",
          des: "https://github.com/joeaaron",
          url: "https://github.com/joeaaron"
        },
        {
          title: "● Technical Notes",
          des: "https://joeaaron.github.io/",
          url: "https://joeaaron.github.io/"
        }
      ]
    },
    exp: {
      expList: [
        {
          title: "Luster technology co., LTD",
          time: "2020.03-Now",
          post: "Technical department /Software engineer",
          img: {
            backgroundImage: `url(${luster})`
          },
          contentList: [
            "Using high concurrency, Multithreading provides solutions for (AI + Industry)",
            "Responsible for technical documentation related to product or project",
            "Use Linux command to complete daily system deployment and maintenance work"
          ]
        },
        {
          title: "HRG technology co. LTD",
          time: "2018.02-2020.02",
          post: "Technical department /Algorithm engineer",
          img: {},
          contentList: [
            "Participate in the discussion of related project requirements, outline design, and complete the core code writing",
            "Development with SpringBoot, SpringMVC and Mybatis",
            "Continuous code reconstruction and optimization, analysis of system deficiencies, improve system performance"
          ]
        }
      ]
    },
    works: {
      worksList: [
        {
          title: "LearningPython",
          des: "Technical difficulities while learning python",
          url: "https://github.com/joeaaron/LearningPython",
          img: {
            src: `${learnpython}`,
            alt: "Technical difficulities while learning python"
          }
        },
        {
          title: "Personal blog site",
          des: "My blog site",
          url: "https://joeaaron.github.io/",
          img: {
            src: `${blog}`,
            alt: "My blog site"
          }
        }
      ],
      viewMore: "Check out more on My GitHub"
    },
    contact: {
      title: "Contact Me",
      desList1: ["INSPIRATION", "CODE", "DREAM", "FUTURE"],
      desList2: [
        "Like to try, look forward to something new",
        "Programming is interested, interest is the future",
        "Line road friends, is a shortcut",
        "With me, see the bigger world together"
      ],
      download: "Download resume",
      fileList: [
        {
          title: "HTML",
          url: ""
        },
        {
          title: "PDF",
          url: ""
        }
      ],
      typeList: [
        {
          title: "GitHub",
          icon: sGithub,
          url: "https://github.com/joeaaron"
        },
        {
          title: "Gitee",
          icon: SGitee,
          url: "https://gitee.com/joeaaron007"
        },
        {
          title: "Blog",
          icon: sBlog,
          url: "https://joeaaron.github.io"
        },
        {
          title: "Jianshu",
          icon: SJianshu,
          url: "https://www.jianshu.com/u/d37149ca7539"
        },
        {
          title: "CSDN",
          icon: SCSDN,
          url: "https://blog.csdn.net/lxy_2011"
        },
        {
          title: "ZhiHu",
          icon: sZh,
          url: "https://www.zhihu.com/people/sheng-huai-nan"
        },
        {
          title: "WeiBo",
          icon: sWeiBo,
          url: "http://weibo.com/rainlvsky"
        }
      ]
    }
  }
};
