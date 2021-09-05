import React from 'react';
import { List } from 'react-virtualized';
import DashboardCard from '../Dashboard/DashboardCard';


const VirtualList = ({items, itemChildren}) => {
    if(items.length) {
        return (
            <List
                height={600}
                width={1000}
                autoWidth={true}
                autoHeight={true}
                rowCount={items.length}
                rowHeight={200}
                noRowsRenderer={() => <h2>No Items in list</h2>}
                rowRenderer={({
                    key, index, isScrolling, isVisible, style
                }) => (
                    <div key={key} style={style} className="ReactVirtualized__List">
                        {
                            !isVisible || isScrolling
                            ? null
                            : (
                                <DashboardCard
                                    body={items[index].label}
                                    header={items[index].label}
                                    footer={items[index].value}
                                />
                            )
                        }
                    </div>
                )}
            />
        );
    }
    return <div />
}

export default VirtualList;