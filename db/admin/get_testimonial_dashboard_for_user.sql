SELECT
    distinct(vw_u_d.id),
    vw_u_d.unique_id,
    concat(vw_u_d.first_name, ' ' , vw_u_d.last_name) as name,
    ( select count(*) from vw_testimonial_dashboard_jan where therapist_id = vw_u_d.id ) as number_of_january_testimonials,
    ( select count(*) from vw_testimonial_dashboard_feb where therapist_id = vw_u_d.id ) as number_of_february_testimonials,
    ( select count(*) from vw_testimonial_dashboard_mar where therapist_id = vw_u_d.id ) as number_of_march_testimonials,
    ( select count(*) from vw_testimonial_dashboard_apr where therapist_id = vw_u_d.id ) as number_of_april_testimonials,
    ( select count(*) from vw_testimonial_dashboard_may where therapist_id = vw_u_d.id ) as number_of_may_testimonials,
    ( select count(*) from vw_testimonial_dashboard_jun where therapist_id = vw_u_d.id ) as number_of_june_testimonials,
    ( select count(*) from vw_testimonial_dashboard_jul where therapist_id = vw_u_d.id ) as number_of_july_testimonials,
    ( select count(*) from vw_testimonial_dashboard_aug where therapist_id = vw_u_d.id ) as number_of_august_testimonials,
    ( select count(*) from vw_testimonial_dashboard_sep where therapist_id = vw_u_d.id ) as number_of_september_testimonials,
    ( select count(*) from vw_testimonial_dashboard_oct where therapist_id = vw_u_d.id ) as number_of_october_testimonials,
    ( select count(*) from vw_testimonial_dashboard_nov where therapist_id = vw_u_d.id ) as number_of_november_testimonials,
    ( select count(*) from vw_testimonial_dashboard_dec where therapist_id = vw_u_d.id ) as number_of_december_testimonials,
    ( select count(*) from vw_testimonial_dashboard_previous_year where therapist_id = vw_u_d.id ) as number_of_testimonials_from_last_year,
    ( select count(*) from vw_testimonial_dashboard_previous_two_year where therapist_id = vw_u_d.id ) as number_of_testimonials_from_last_two_years
from vw_users_dashboard vw_u_d
where vw_u_d.id = ${userId}
group by vw_u_d.id, vw_u_d.unique_id, vw_u_d.first_name, vw_u_d.last_name;