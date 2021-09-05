select
    user_id, 
    count(*) as number_of_events
from vw_event_dashboard_jul
group by user_id;