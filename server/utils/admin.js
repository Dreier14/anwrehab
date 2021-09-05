module.exports = {
  formatUserInfoForDashboard({ dbUserInfo, isAdmin }) {
    let formattedResult = {};
    if (!dbUserInfo.length) return formattedResult;
    formattedResult.info = dbUserInfo[0].admin_info;
    formattedResult.users = dbUserInfo.map((uI) => ({
      label: uI.therapist_services_provided,
      value: Number(uI.therapist_services_provided_count),
    }));
    return formattedResult;
  },
  formatEventInfoForDashboard({ dbEventInfo, isAdmin }) {
    let formattedResult = {};
    const getMonthFunc = this.getMonth;

    if (!dbEventInfo.length) return formattedResult;
    formattedResult.events = Object.keys(dbEventInfo[0])
      .filter((eI) => eI !== "user_id" && eI !== "count")
      .map((eI, eIIdx) => ({
        label: getMonthFunc(eI),
        value: Number(dbEventInfo[0][eI]),
      }));

    formattedResult.totalEvents = dbEventInfo[0].count;

    return formattedResult;
  },
  formatTestimonialInfoForDashboard({ dbTestimonialInfo, isAdmin }) {
    let totalTestimonials = 0;
    let formattedResult = {};
    const getMonthFunc = this.getMonth;

    if (!dbTestimonialInfo.length) return formattedResult;
    formattedResult.testimonials = dbTestimonialInfo.map((testimonial) => {
      let testimonialToReturn = {
        id: testimonial.id,
        name: testimonial.name,
        uniqueId: testimonial.unique_id,
      },
      lastYearTestimonialsForCurrentUser = Number(testimonial.number_of_testimonials_from_last_year),
      last2YearsTestimonialsForCurrentUser = Number(testimonial.number_of_testimonials_from_last_two_years);
      delete testimonial.id;
      delete testimonial.name;
      delete testimonial.unique_id;
      delete testimonial.number_of_testimonials_from_last_year;
      delete testimonial.number_of_testimonials_from_last_two_years;
      const months = Object.keys(testimonial).map((testKey) => {
        const numberOfTestimonialsForUser = Number(testimonial[testKey]);
        totalTestimonials += numberOfTestimonialsForUser;
        return {
          label: getMonthFunc(testKey),
          value: numberOfTestimonialsForUser,
        };
      });
      months.push({ label: 'Last Year', value: lastYearTestimonialsForCurrentUser });
      months.push({ label: 'Last 2 Years', value: last2YearsTestimonialsForCurrentUser });
      testimonialToReturn.monthGraphData = months;
      return testimonialToReturn;
    });

    formattedResult.totalTestimonials = totalTestimonials;

    return formattedResult;
  },
  getMonth(month) {
    const lastUnderscore = month[0].lastIndexOf("_");
    return month.slice(10, lastUnderscore);
  },
  isOnDevelopment: process.env.NODE_ENV || "development" === "development",
  folders: {
    users: "users",
    events: "events",
    admin: "admin",
    adminDeleted: "admin_deleted",
    testimonials: "testimonials",
  },
};
