import React from 'react'
import Chart from 'react-apexcharts'
const CustomerReview = () => {
    const data={
        series:[
            {
                name:"Review",
                data:[10, 50, 30, 90, 40, 120, 100],
            },
        ],
        options:{
            chart:{
                type:"area",
                height:"auto",
            }, dropShadow:{
                enabled:false,
                enabledOnSeries:undefined,
                top:0,
                left:0,
                blur:3,
                color:["#fff"],
                opacity:0.35,
            },

            fill:{
                colors:["#fff"],
                type:"gradient"
            },
            dataLabels:{
                enabled:false,
            },
            stroke:{
                curve:"smooth",
                colors:["white"],
            },
            tooltip:{
                x:{
                    format:"dd/MM/yy HH:mm"
                },
            },
            grid:{
                show:false,
            },
            xaxis:{
               type:"datetime",
               categories:[
                    "2018-09-19T00:00.00Z",
                    "2018-09-19T01:30.00Z",
                    "2018-09-19T02:30.00Z",
                    "2018-09-19T03:30.00Z",
                    "2018-09-19T04:30.00Z",
                    "2018-09-19T05:30.00Z",
                    "2018-09-19T06:30.00Z",
               ] ,
            },
            yaxis:{
                show:false
            },
            toolbar:{
                show:false
            }
        }
    }
  return (
    <div className="CustomerReview">
        <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default CustomerReview