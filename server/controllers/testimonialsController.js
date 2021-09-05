
const adminUtils = require('../utils/admin');
const authUtils = require('../utils/auth');
let testimonials=[
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
    }
]
const controllerMethods = {
    getTestimonials: async (req, res) =>{
        const orm = req.app.get('orm'),
              { id } = req.session.user.info;
        let testimonials;
        
        if(await authUtils.isAdmin(req)) {
            testimonials = await orm.query(
                adminUtils.folders.testimonials,
                'get_all_testimonials'
            );
        } else {
            testimonials = await orm.query(
                adminUtils.folders.testimonials,
                'get_testimonials_by_user_id',
                { userId: id }
            );
        }

        return res.json({ testimonials });
    },
    createTestimonials: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user.info,
              { userId, name, servicesProvided, experience, lkTestimonialStatusId, importantFl } = req.body;
        
        await orm.modify(
            adminUtils.folders.testimonials,
            'create_testimonial', 
            { userId, name, servicesProvided, experience, lkTestimonialStatusId, importantFl, createdBy: id }
        );

        return res.json({success: true});
    },
    updateTestimonials: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user.info,
              { userId, name, servicesProvided, experience, lkTestimonialStatusId, importantFl } = req.body,
              { testimonial_id } = req.params;
        
        await orm.modify(
            adminUtils.folders.testimonials,
            'update_testimonial', 
            { userId, name, servicesProvided, experience, lkTestimonialStatusId, importantFl, modifiedBy: id, testimonialId: testimonial_id }
        );

        return res.json({success: true});
    },
    deleteTestimonials: async (req, res) => {
        const orm = req.app.get('orm'),
              { id } = req.session.user.info,
              { testimonial_id } = req.params;
        
        await orm.modify(
            adminUtils.folders.testimonials,
            'delete_testimonial', 
            { testimonialId: testimonial_id, deletedBy: id }
        );

        return res.json({success: true});
    },
};

module.exports = controllerMethods;