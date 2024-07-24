import { Request, Response, NextFunction } from "express";

const testimonials= [
    {
        name:"Daniel H.",
        services:"Occupational Therapy",
        experience:"I am very impressed by Shayna and her patience and treatment plan with Felicity and how Felicity is progressively learning new skills. Thank You!"
    },
    {
        name:"Marisol C.",
        services:"Occupational Therapy",
        experience:"All of us enjoy having our therapist around. Damian loves Larizza and has a great time with therapy. Most of all he enjoys working and finishing up work. We have noticed lots of progress and he is much easier to redirect. We notice awesome therapy progress every time."
    },
    {
        name:"Adrienne R.",
        services:"Occupational Therapy",
        experience:"Matt has helped to not only improve my son’s skills in areas such as writing, cutting, toleration for sensory experiences, and shoe-tying, but also in regulating his emotions. I am very thankful for him and my experiences with your company."
    },
    {
        name:"A.M.",
        services:"Occupational Therapy",
        experience:"Mary has taught my son breathing techniques, yoga, patience, how to deal with losing a simple board game (this is a big deal), and so many different ways to THINK about daily issues -always being supportive. We love the services she provides our family, she is #1 out of everyone we've worked with in the last 6 years! We hope to keep her as long as necessary, she is a plethora of knowledge. My son adores her she is also tough when she needs to be -Awesome!"
    },
    {
        name:"Annette L.",
        services:"Occupational Therapy & Hand-Writing Without Tears",
        experience:"We've worked with Shayna and now Larizza. We used Shayna as both a Handwriting without Tears coach and as an OT.  She is so patient and encouraging that our son (who doesn't need therapy) wants to do the activities!"
    },
    {
        name:"T.P.",
        services:"Aquatic Therapy",
        experience:"Kris has been a big positive with her services in Aquatic Therapy. Our child is enjoying the therapy and we would absolutely recommend Aquatic-N-Writing Rehab. Our experience with them has been proven to be very helpful and Kris is very friendly!"
    }
];

export const getTestamonials = (    
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const data = testimonials.map((element) => {
        return element
    });
    res.status(200).json(data)
};