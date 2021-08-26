const authUtils = require('../utils/auth');

let therapists = [
    {
        id: 1,
        photo: "https://drive.google.com/uc?id=1I5T6FzCPmJwbvoY5g8pGoBBraFhW6dxJ" ,
        name: "Shayna W." ,
        service: "MOTR/L",
        information: "I attended Gannon University where I graduated in 2009. I became a therapist because I enjoy helping others. While in college I ran Division 2 cross country and worked as a physical therapy technician.  I discovered OT through job shadowing in high school and immediately fell in love with the profession. I am a certified handwriting specialist and I have advanced training in aquatics. Running, art, playing with my daughter: and traveling are just some of the things I enjoy. I have run 12 marathons: including the Boston Marathon. I also coach cross-country at Estrella Mountain Community College."
    },
    {
        id: 2,
        photo: "https://drive.google.com/uc?id=1ghLlRrSwuY6W7yo7JU7KvsdZEULuV593" ,
        name: "Dr.Michelle T." ,
        service: "PT, DPT",
        information: "I attended A.T. Still University where I graduated in May 2006. I became a pediatric physical therapist to assist clients and their families meet their rehab potential. I enjoy seeing my clients overcome their weaknesses and meet their goals. I have training in aquatic therapy with additional continuing education courses in the Complex Pediatric Patient, Pediatric Myofascial Release, and Ready Bodies Learning Minds. I’m a credentialed clinical instructor through A.T. Still University. I enjoy lifting heavy weights and competing in powerlifting competitions. If I’m not riding in a car I’m taking a spin on my Ninja 300."
    },
    {
        id: 3,
        photo: "https://drive.google.com/uc?export=view&id=1EJ9jn_GcW14mpJMXuVCBXryi6if3FDt-" ,
        name: "Justin R." ,
        service: "PT, DPT",
        information: "I attended Franklin Pierce University in Goodyear, AZ where I graduated in March 2017. I became a therapist because I love helping others and wish to see them reach their optimal potential. I love running, playing basketball, watching movies with my family, and taking on fun projects. I had a successful running career as a student-athlete at Mesa Community College and BYU-Hawaii. I have 2 beautiful children and a loving wife. I presented research at APTA's Combined Sections Meeting in 2016 and additionally have been published in 'Innovation in Aging ‘for research related to tele-rehabilitation."
    },
    {
        id: 4,
        photo: "https://drive.google.com/uc?id=1LEcnnbsbe0QwBP4VSeVek4ryaeI0XmcZ" ,
        name: "Analyn M." ,
        service: "D.H. Ed, M. Ed, OTR/L",
        information: "I attended Emilio Anguinaldo College where I graduated in April 1998. I became a therapist because of family that are in the medical field, which influenced me to choose OT as my profession. Personally it is fulfilling to help clients who are struggling because of their disability and to make them feel important and hopeful. I was trained in sensory integration and handwriting. I have years of experience in special education. Some hobbies I love are to paint, draw, sing, cook, and computer programming. I don't have a 'green thumb', but planting or landscaping is my 'cup of tea.'"
    },
    {
        id: 5,
        photo: "https://drive.google.com/uc?id=1Rew3pDsnfIGYg4yyURUILX2Ze5MssAM7" ,
        name: "Kris E." ,
        service: "OTD, OTR/L",
        information: "I attended Creighton University where I graduated in May 1991 with a degree in B.S.O.T. and again in May 1997 with a degree in O.T.D. I became a therapist because I wanted to help people in need to re-gain as much function for a productive life. I have taken several courses in sensory processing and NDT handling. I've also taken several autism courses. Some of the hobbies I like to do are outdoor activities including hiking and biking. I am a parent of twins that are 16 and a 12 year old."
    },
    {
        id: 7,
        photo: "https://drive.google.com/uc?id=1BrJUKH9bDKhial35sV5NWYNrV3Oj_kc6" ,
        name: "Marissa E" ,
        service: "MS, OTR/L",
        information: "I attended Touro University in Nevada and graduated in 2016. I became a therapist because I wanted to help people DO things better instead of just FEEL better. One of my specialties is feeding therapy. Some of my hobbies are reading, spending time with my nieces and nephew, and going to the movies. I have three sisters and a basset hound named Fitzwilliam, after Mr. Fitzwilliam Darcy."
    },
    {
        id: 8,
        photo: "https://drive.google.com/uc?export=view&id=1WJuo6Yj45ru5xY7Hu4ThdQnmbJB6VFoH" ,
        name: "Lori R." ,
        service: "COTA/L",
        information: "Lori Riley is a Certified Occupational Therapy Assistant. She is originally from Ohio and graduated from Kent State University in 2015. She is an Occupational Therapy practitioner in both home based pediatric and in the school settings. She specializes in providing sensory Integration strategies into her individualized interventions. She is also a very proud Air Force Mom to her son Nick. She enjoys crafting activities and spending time with her husband and son."
    },
    {
        id: 9,
        photo: "https://drive.google.com/uc?id=1Tyu4UDxc0UfOucbl9xOE0fbbXiov0q80" ,
        name: "Larizza V." ,
        service: "COTA/L",
        information: "I graduated from San Diego State University in 2003 and graduated from Pima in 2015. I became a therapist because I have a passion to work with pediatrics and geriatrics populations. One of my specialties is Handwriting without Tears and Kinesiology Tape. Some of my hobbies are walking, hanging out with my family, and watching scary movies. I love watching Pimple Popper youtube."
    },
    {
        id: 10,
        photo: "https://drive.google.com/uc?id=1SRbC5K9J41UMDa7SIr3SwI0DUgp3AiBr" ,
        name: "Octaviana C." ,
        service: "COTA/L",
        information: "I attended Pima Medical Institute where I graduated in 2010. I became a therapist because I like to see when people or kids get stronger, reach their goals and become independent. I am bilingual and fluent in English and Spanish. I have received training in Brain Gym, neuroplasticity in children, and strength training. I enjoy nature, hiking, camping and having fun with arts and crafts."
    },
    {
        id: 11,
        photo: "https://drive.google.com/uc?id=1zHI9vbL7SS17_AslCOwAeHOnfn6o3p2d" ,
        name: "Sarah B." ,
        service: "COTA/L",
        information: "I attended Santa Ana College where I graduated in 2012. I became a therapist because I have a passion for helping people become independent in doing the things they love. I specialize in NDT, Feeding Therapy, and Handwriting Without Tears. I enjoy spending time with my family, reading, hiking, shopping, exercising, boating, quad riding, and working on cars. I have 3 children, I am a Capricorn, and I also met Blake Shelton on the Voice."
    },
    {
        id: 12,
        photo: "https://drive.google.com/uc?id=1CPVxorHWMNchPBHDm5do6aeezziaoQRV" ,
        name: "Jason S." ,
        service: "COTA/L",
        information: "I attended Pima Medical Institute. I became a therapist because I wanted to help people that have a real need so they may achieve independence and live an abundant life. I like finding new and innovative ways to treat patients. I enjoy spending time with my family, going camping, fishing, and also doing some wood working."
    },
    {
        id: 13,
        photo: "https://drive.google.com/uc?id=1jo_rwv_lgY7D2LSbmnwwhWY2ep9IPxkE" ,
        name: "Matthew H." ,
        service: "COTA/L",
        information: "I attended Brown Mackie College where I graduated in February of 2017. I became a therapist because I wanted a fun fulfilling career where all I do is help someone achieve the goals set for/by them and not feel like I worked a day in my life. Helping someone live as independently as possible knowing their lives are changed because of something I did is an amazing feeling. Sensory integration is something I am very interested in and have worked on. I enjoy hockey, gaming, hanging out with my wife and son, and working on my YouTube channel with my brother in law."
    },
    {
        id: 14,
        photo: "https://drive.google.com/uc?id=1p-i2Rs0JHvdV33tk-E3rGhawMAR666Oz" ,
        name: "Gabby S." ,
        service: "COTA/L",
        information: "I attended Brown Mackie College and became a therapist because I had a student with autism, he inspired me to become a COTA. One of my specialties is Hand-Writing Without Tears. Some of my hobbies include dancing and reading. I also love snoopy cartoons!"
    },
    {
        id: 15,
        photo: null ,
        name: "Lisa S." ,
        service: "COTA",
        information: "Lisa graduated from Brown Mackie College in 2011, Lisa is fluent in Japanese and enjoys spending time with her son and health and wellness. Lisa has 8 plus years pediatric OT experience."
    },
    {
        id: 16,
        photo: null ,
        name: "Mallory C." ,
        service: "COTA",
        information: "Mallory enjoys working with people from all backgrounds while helping them increase the value of their lives.  Mallory enjoys crafting, hiking and visiting farmers markets."
    },
    {
        id: 17,
        photo: null ,
        name: "Christina R." ,
        service: "SLP",
        information: "	Christina graduated from the University of Texas at El Paso in 2006. Christina is bilingual in Spanish/English and has extensive experience with brain injuries. Christina became a therapist after her grandmother had a stroke and she saw how much the speech therapist helped her, she knew that she wanted to help people in that way. Christina enjoys watching her kids play sports and working out."
    },
    {
        id: 18,
        photo: null ,
        name: "I am a mother of 12, yes 12!  Two of my children have Cerebral Palsy, my interest in the field stems from the many hours of therapy I have been through with my girls.  I enjoy spending time outdoors with my family!" ,
        service: "Administrative Asst.",
        information: "I am a mother of 12, yes 12!  Two of my children have Cerebral Palsy, my interest in the field stems from the many hours of therapy I have been through with my girls.  I enjoy spending time outdoors with my family!"
    },
]

const controllerMethods = {
    getTherapistData: (req, res) =>{
        const orm = req.app.get('orm');
        console.log("ORM:", orm);
        let data = therapists.map((element) => {
            return element
       });
       res.status(200).json(data)
    },
    updateTherapists: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user,
              { username, photo, firstName, middleName, lastName, information, password, lkServiceId } = req.body,
              hashedPassword = authUtils.hashPassword(password),
              { therapist_id } = req.params;

        await orm.modify('update_therapist', { username, photo, firstName, middleName, lastName, information, password: hashedPassword, lkServiceId, therapistId: therapist_id, modifiedBy: id });

        return res.json({success: true});
    },
    deleteTherapists: async (req, res) => {
        const orm = req.app.get('orm'),
              { therapist_id } = req.params;

        await orm.modify('delete_therapist', { therapistId: therapist_id });

        return res.json({success: true});
    }
};

module.exports = controllerMethods;