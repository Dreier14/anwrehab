let therapists = [
    {
        id: 1,
        photo: "https://drive.google.com/thumbnail?id=1I5T6FzCPmJwbvoY5g8pGoBBraFhW6dxJ" ,
        name: "Shayna W." ,
        service: "MOTR/L",
        information: "I attended Gannon University where I graduated in 2009. I became a therapist because I enjoy helping others. While in college I ran Division 2 cross country and worked as a physical therapy technician.  I discovered OT through job shadowing in high school and immediately fell in love with the profession. I am a certified handwriting specialist and I have advanced training in aquatics. Running, art, playing with my daughter: and traveling are just some of the things I enjoy. I have run 12 marathons: including the Boston Marathon. I also coach cross-country at Estrella Mountain Community College."
    },
    {
        id: 2,
        photo: "https://drive.google.com/thumbnail?id=1ghLlRrSwuY6W7yo7JU7KvsdZEULuV593" ,
        name: "Dr.Michelle T." ,
        service: "PT, DPT",
        information: "I attended A.T. Still University where I graduated in May 2006. I became a pediatric physical therapist to assist clients and their families meet their rehab potential. I enjoy seeing my clients overcome their weaknesses and meet their goals. I have training in aquatic therapy with additional continuing education courses in the Complex Pediatric Patient, Pediatric Myofascial Release, and Ready Bodies Learning Minds. I’m a credentialed clinical instructor through A.T. Still University. I enjoy lifting heavy weights and competing in powerlifting competitions. If I’m not riding in a car I’m taking a spin on my Ninja 300."
    },
    {
        id: 3,
        photo: "https://drive.google.com/thumbnail?id=1EJ9jn_GcW14mpJMXuVCBXryi6if3FDt-" ,
        name: "Justin R." ,
        service: "PT, DPT",
        information: "I attended Franklin Pierce University in Goodyear, AZ where I graduated in March 2017. I became a therapist because I love helping others and wish to see them reach their optimal potential. I love running, playing basketball, watching movies with my family, and taking on fun projects. I had a successful running career as a student-athlete at Mesa Community College and BYU-Hawaii. I have 2 beautiful children and a loving wife. I presented research at APTA's Combined Sections Meeting in 2016 and additionally have been published in 'Innovation in Aging ‘for research related to tele-rehabilitation."
    },
    {
        id: 4,
        photo: "https://drive.google.com/thumbnail?id=1phToXW2mQnLaRviEuWsMO3OFVFlkPKal" ,
        name: "Victoria R." ,
        service: "COTA/L",
        information: "I attended Pima Medical Institute where I graduated in 2021. I became a therapist to help support children and their families in need of guidance and therapy to promote a functional lifestyle with adaptive strategies or learning new skills! I enjoy collaborating and building rapport with kiddos with any diagnosis, alongside their families, as it provides endless learning experiences to strengthen my skills as well as educate families on how to promote an independent lifestyle. My hobbies include spending time with family and friends, exploring Arizona and traveling to new places."
    },
    {
        id: 5,
        photo: "https://drive.google.com/thumbnail?id=1Rew3pDsnfIGYg4yyURUILX2Ze5MssAM7" ,
        name: "Kris E." ,
        service: "OTD, OTR/L",
        information: "I attended Creighton University where I graduated in May 1991 with a degree in B.S.O.T. and again in May 1997 with a degree in O.T.D. I became a therapist because I wanted to help people in need to re-gain as much function for a productive life. I have taken several courses in sensory processing and NDT handling. I've also taken several autism courses. Some of the hobbies I like to do are outdoor activities including hiking and biking. I am a parent of twins that are 16 and a 12 year old."
    },
    {
        id: 6,
        photo: "https://drive.google.com/thumbnail?id=1BrJUKH9bDKhial35sV5NWYNrV3Oj_kc6" ,
        name: "Marissa E." ,
        service: "MS, OTR/L",
        information: "I attended Touro University in Nevada and graduated in 2016. I became a therapist because I wanted to help people DO things better instead of just FEEL better. One of my specialties is feeding therapy. Some of my hobbies are reading, spending time with my nieces and nephew, and going to the movies. I have three sisters and a basset hound named Fitzwilliam, after Mr. Fitzwilliam Darcy."
    },
    {
        id: 7,
        photo: "https://drive.google.com/thumbnail?id=1WJuo6Yj45ru5xY7Hu4ThdQnmbJB6VFoH" ,
        name: "Lori R." ,
        service: "COTA/L",
        information: "Lori Riley is a Certified Occupational Therapy Assistant. She is originally from Ohio and graduated from Kent State University in 2015. She is an Occupational Therapy practitioner in both home based pediatric and in the school settings. She specializes in providing sensory Integration strategies into her individualized interventions. She is also a very proud Air Force Mom to her son Nick. She enjoys crafting activities and spending time with her husband and son."
    },
    {
        id: 8,
        photo: "https://drive.google.com/thumbnail?id=1Tyu4UDxc0UfOucbl9xOE0fbbXiov0q80" ,
        name: "Larizza V." ,
        service: "COTA/L",
        information: "I graduated from San Diego State University in 2003 and graduated from Pima in 2015. I became a therapist because I have a passion to work with pediatrics and geriatrics populations. One of my specialties is Handwriting without Tears and Kinesiology Tape. Some of my hobbies are walking, hanging out with my family, and watching scary movies. I love watching Pimple Popper youtube."
    },
    {
        id: 9,
        photo: "https://drive.google.com/thumbnail?id=1CPVxorHWMNchPBHDm5do6aeezziaoQRV" ,
        name: "Jason S." ,
        service: "COTA/L",
        information: "I attended Pima Medical Institute. I became a therapist because I wanted to help people that have a real need so they may achieve independence and live an abundant life. I like finding new and innovative ways to treat patients. I enjoy spending time with my family, going camping, fishing, and also doing some wood working."
    },
    {
        id: 10,
        photo: "https://drive.google.com/thumbnail?id=1jo_rwv_lgY7D2LSbmnwwhWY2ep9IPxkE" ,
        name: "Matthew H." ,
        service: "COTA/L",
        information: "I attended Brown Mackie College where I graduated in February of 2017. I became a therapist because I wanted a fun fulfilling career where all I do is help someone achieve the goals set for/by them and not feel like I worked a day in my life. Helping someone live as independently as possible knowing their lives are changed because of something I did is an amazing feeling. Sensory integration is something I am very interested in and have worked on. I enjoy hockey, gaming, hanging out with my wife and son, and working on my YouTube channel with my brother in law."
    },
    {
        id: 11,
        photo: "https://drive.google.com/thumbnail?id=1p-i2Rs0JHvdV33tk-E3rGhawMAR666Oz" ,
        name: "Gabby S." ,
        service: "COTA/L",
        information: "I attended Brown Mackie College and became a therapist because I had a student with autism, he inspired me to become a COTA. One of my specialties is Hand-Writing Without Tears. Some of my hobbies include dancing and reading. I also love snoopy cartoons!"
    },
    {
        id: 12,
        photo: null ,
        name: "Mallory C." ,
        service: "COTA",
        information: "Mallory enjoys working with people from all backgrounds while helping them increase the value of their lives.  Mallory enjoys crafting, hiking and visiting farmers markets."
    },
    {
        id: 13,
        photo: null ,
        name: "Christina R." ,
        service: "SLP",
        information: "	Christina graduated from the University of Texas at El Paso in 2006. Christina is bilingual in Spanish/English and has extensive experience with brain injuries. Christina became a therapist after her grandmother had a stroke and she saw how much the speech therapist helped her, she knew that she wanted to help people in that way. Christina enjoys watching her kids play sports and working out."
    },
    {
        id: 14,
        photo: "https://drive.google.com/thumbnail?id=1vAN715YkuG_g4x0Di-LSjnB8iJZJIa5B" ,
        name: "Jessica H." ,
        service: "Administrative Asst.",
        information: "I am a mother of 12, yes 12!  Two of my children have Cerebral Palsy, my interest in the field stems from the many hours of therapy I have been through with my girls.  I enjoy spending time outdoors with my family!"
    },
]

module.exports ={
    getTherapistData : (req, res) =>{
        let data = therapists.map((element) => {
            return element
       });
       res.status(200).json(data)
    }
}