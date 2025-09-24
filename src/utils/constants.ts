import fashionFusion from "../assets/images/fashion_fusion_screenshot.png";
import paradiseView from "../assets/images/paradise_view_screenshot.png";

export const navLinks = [
    {
        href: "#skills",
        text: "skills"
    },
    {
        href: "#projects",
        text: "projects"
    },
    {
        href: "#contact",
        text: "contact me"
    }
]

export const projects = [
    {
        title: "Teem",
        description: "Teem is a collaboration platform I built to help remote teams work together more efficiently! Features include real-time messaging, task management, built-in meetings and more!",
        liveUrl: "https://teem-work.vercel.app",
        codeUrl: "https://github.com/Olowokere-Destiny/teem",
        hasVideoDemo: true,
        demoVideoUrl: "teem_demo.mp4",
    },
    {
        title: "Fashion Fusion",
        description: "This is a clothing and fashion website where you can search and buy your favourite clothing apparels. Just type into the search bar and discover millions of clothing and brands!",
        image: fashionFusion,
        liveUrl: "https://fashion-fushion.vercel.app",
        codeUrl: "https://github.com/Olowokere-Destiny/fashion-fushion",
    },
    {
        title: "Paradise View",
        description: "This is a property booking website (similar to BOOKING.com) where you can search for hotels, apartments, hostels and more around the globe.",
        image: paradiseView,
        liveUrl: "https://paradise-view-green.vercel.app",
        codeUrl: "https://github.com/Olowokere-Destiny/paradise-view",
    }
]