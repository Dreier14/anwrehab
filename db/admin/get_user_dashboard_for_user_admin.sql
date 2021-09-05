select 
    (
        select row_to_json(admin_row) from (
            select * from vw_users_dashboard where id = ${userId}
        ) as admin_row
    ) as admin_info,
    therapist_services_provided,
    count(*) as therapist_services_provided_count
from vw_users_dashboard
group by therapist_services_provided;