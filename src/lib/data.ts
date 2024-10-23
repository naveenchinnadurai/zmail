import { EmailType } from "./types";

export const email:EmailType[]=[
    {
        from:"William Smith",
        title:"Meeting Tomorrow",
        text:[
            "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
            "Please come prepared with any questions or insights you may have. Looking forward to our meeting!",
            "Best regards, William"
        ],
        buttonText:["meeting","work","important"], 
        time:""
    },
    {
        from:"ALice Smith",
        title:"Project Update",
        text:[
            "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.",
            "I have a few minor suggestions that I'll include in the attached document.",
            "Let's discuss these during our next meeting. Keep up the excellent work!",
            "Best regards, Alice"
        ],
        buttonText:["Work", "Important"],
        time:""
    },
    {
        from:"Bob Johnson",
        title:"Weekend Plans",
        text:[
            "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.",
            "If you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.",
            "Looking forward to your response!",
            "Best, Bob"
        ],
        buttonText:["Personal"],
        time:""
    }
]