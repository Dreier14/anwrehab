SELECT
    user_id,
    count(*),
    ( select count(*) from vw_event_dashboard_jan ) as number_of_january_events,
    ( select count(*) from vw_event_dashboard_feb ) as number_of_february_events,
    ( select count(*) from vw_event_dashboard_mar ) as number_of_march_events,
    ( select count(*) from vw_event_dashboard_apr ) as number_of_april_events,
    ( select count(*) from vw_event_dashboard_may ) as number_of_may_events,
    ( select count(*) from vw_event_dashboard_jun ) as number_of_june_events,
    ( select count(*) from vw_event_dashboard_jul ) as number_of_july_events,
    ( select count(*) from vw_event_dashboard_aug ) as number_of_august_events,
    ( select count(*) from vw_event_dashboard_sep ) as number_of_september_events,
    ( select count(*) from vw_event_dashboard_oct ) as number_of_october_events,
    ( select count(*) from vw_event_dashboard_nov ) as number_of_november_events,
    ( select count(*) from vw_event_dashboard_dec ) as number_of_december_events
from vw_event_dashboard
group by user_id
having user_id = ${userId};