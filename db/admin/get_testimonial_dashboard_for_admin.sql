SELECT
    distinct(vw_u_d.id),
    vw_u_d.unique_id,
    concat(vw_u_d.first_name, ' ' , vw_u_d.last_name) as name,
    ( select count(*) from vw_testimonial_dashboard_jan where vw_testimonial_dashboard_jan.therapist_id = vw_u_d.id  ) as number_of_january_testimonials,
    ( select count(*) from vw_testimonial_dashboard_feb where vw_testimonial_dashboard_feb.therapist_id = vw_u_d.id ) as number_of_february_testimonials,
    ( select count(*) from vw_testimonial_dashboard_mar where vw_testimonial_dashboard_mar.therapist_id = vw_u_d.id ) as number_of_march_testimonials,
    ( select count(*) from vw_testimonial_dashboard_apr where vw_testimonial_dashboard_apr.therapist_id = vw_u_d.id ) as number_of_april_testimonials,
    ( select count(*) from vw_testimonial_dashboard_may where vw_testimonial_dashboard_may.therapist_id = vw_u_d.id ) as number_of_may_testimonials,
    ( select count(*) from vw_testimonial_dashboard_jun where vw_testimonial_dashboard_jun.therapist_id = vw_u_d.id ) as number_of_june_testimonials,
    ( select count(*) from vw_testimonial_dashboard_jul where vw_testimonial_dashboard_jul.therapist_id = vw_u_d.id ) as number_of_july_testimonials,
    ( select count(*) from vw_testimonial_dashboard_aug where vw_testimonial_dashboard_aug.therapist_id = vw_u_d.id ) as number_of_august_testimonials,
    ( select count(*) from vw_testimonial_dashboard_sep where vw_testimonial_dashboard_sep.therapist_id = vw_u_d.id ) as number_of_september_testimonials,
    ( select count(*) from vw_testimonial_dashboard_oct where vw_testimonial_dashboard_oct.therapist_id = vw_u_d.id ) as number_of_october_testimonials,
    ( select count(*) from vw_testimonial_dashboard_nov where vw_testimonial_dashboard_nov.therapist_id = vw_u_d.id ) as number_of_november_testimonials,
    ( select count(*) from vw_testimonial_dashboard_dec where vw_testimonial_dashboard_dec.therapist_id = vw_u_d.id ) as number_of_december_testimonials,
    ( select count(*) from vw_testimonial_dashboard_previous_year where vw_testimonial_dashboard_previous_year.therapist_id = vw_u_d.id ) as number_of_testimonials_from_last_year,
    ( select count(*) from vw_testimonial_dashboard_previous_two_year where vw_testimonial_dashboard_previous_two_year.therapist_id = vw_u_d.id ) as number_of_testimonials_from_last_two_years
from vw_users_dashboard vw_u_d
group by vw_u_d.id, vw_u_d.unique_id, vw_u_d.first_name, vw_u_d.last_name;