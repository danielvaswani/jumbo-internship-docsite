---
next:
  text: Learning Outcomes
  link: /project-management/learning-outcomes.md
---

<script setup>
import { ref } from 'vue'
import { GGanttChart, GGanttRow } from '@infectoone/vue-ganttastic'

const hourBarList1 = ref([
  {
    beginDate: "01.01.2022 15:00",
    endDate: "01.01.2022 19:45",
    ganttBarConfig: {
      id: "8621987329",
      label: "Drag me",
      style: {
        color: "white"
      }
    }
  },
  {
    beginDate: "01.01.2022 23:00",
    endDate: "02.01.2022 08:05",
    ganttBarConfig: {
      id: "8621987322",
      label: "Drag my handles",
      hasHandles: true,
      style: {
        background: "#d66f2a",
        color: "white"
      }
    }
  }
])

const hourBarList2 = ref([])

const dayBarList1 = ref([
  {
    beginDate: "31.10.2022 15:00",
    endDate: "01.11.2022 05:45",
    ganttBarConfig: {
      id: "a621987323",
      label: "Drag me",
      style: {
        background: "#cc2a2d",
        color: "white"
      }
    }
  },
  {
    beginDate: "01.11.2022 09:00",
    endDate: "02.11.2022 08:00",
    imgSrc: "https://user-images.githubusercontent.com/28678851/148047714-301f07df-4101-48b8-9e47-1f272b290e80.png",
    ganttBarConfig: {
      id: "x21987322",
      label: "I have an image",
      hasHandles: true,
      style: {
        background: "#e2e595",
        color: "black",
        borderRadius: "40px"
      }
    }
  }
])

const monthBarList1 = ref([
  {
    beginDate: "01.01.2022 23:00",
    endDate: "02.02.2022 08:05",
    ganttBarConfig: {
      id: "5621987352",
      label: "I'm in a bundle",
      hasHandles: true,
      bundle: "myBundle",
      style: {
        background: "#1c8745",
        color: "white",
        borderRadius: "20px"
      }
    }
  }
])

const monthBarList2 = ref([
  {
    beginDate: "01.01.2022 23:00",
    endDate: "02.02.2022 08:05",
    ganttBarConfig: {
      id: "8621987321",
      label: "I'm in a bundle",
      hasHandles: true,
      bundle: "myBundle",
      style: {
        background: "#a02353",
        color: "white",
        borderRadius: "20px"
      }
    }
  },
  {
    beginDate: "15.02.2022 00:00",
    endDate: "01.03.2022 00:05",
    ganttBarConfig: {
      id: "7721987321",
      label: "Lorem ispum dolor",
      bundle: "bundle2",
      style: {
        backgroundImage: "repeating-linear-gradient(45deg, #ccc, #ccc 30px, #8221b2 30px, #8221b2 60px)",
        borderRadius: "20px",
        color: "black"
      }
    }
  }
])
const monthBarList3 = ref([{
    beginDate: "15.02.2022 00:00",
    endDate: "01.03.2022 00:05",
    ganttBarConfig: {
      id: "7721987325",
      label: "Lorem ispum dolor",
      bundle: "bundle2",
      style: {
        backgroundImage: "repeating-linear-gradient(45deg, #ccc, #ccc 30px, #8221b2 30px, #8221b2 60px)",
        borderRadius: "20px",
        color: "black"
      }
    }
  }])

const addHourBar = () => {
  if (hourBarList2.value.some(bar => bar.ganttBarConfig.id === "test1")) {
    return
  }
  const bar = {
    beginDate: "01.01.2022 18:00",
    endDate: "02.01.2022 02:00",
    ganttBarConfig: {
      id: "test1",
      hasHandles: true,
      label: "Hello!",
      style: {
        background: "#5484b7",
        borderRadius: "20px",
        color: "white"
      }
    }
  }
  hourBarList2.value.push(bar)
}

const deleteHourBar = () => {
  const idx = hourBarList2.value.findIndex(b => b.ganttBarConfig.id === "test1")
  if (idx !== -1) {
    hourBarList2.value.splice(idx, 1)
  }
}

</script>

# Project Management

## Project Title: KompasAnalyzer Dashboard

## Gantt chart

<g-gantt-chart chart-start="01.01.2022 12:00" chart-end="02.01.2022 12:00" precision="hour" grid width="100%" bar-start="beginDate" bar-end="endDate" date-format="DD.MM.YYYY HH:mm">
<g-gantt-row label="My row 1" :bars="hourBarList1" highlight-on-hover/>
<g-gantt-row label="Another row" :bars="hourBarList2" highlight-on-hover/>
</g-gantt-chart>



## Finished Products

## Acceptance criteria

**1. Consider all possible workflows:** <br> Make sure it shows insights for all possibe workflows of Kompas contribution and consumption. For example Design -> Feature team, Feature team -> Design -> Feature team development.

**2. Choose Important Metrics:** <br> Pick the key things we want to measure, like how often developers use certain design elements or how much they customize them.

**3. Design the Dashboard:** <br> Create a simple and easy-to-use dashboard that clearly displays these metrics. Make sure it's user-friendly for everyone, even those not familiar with data analysis.

**4. Decide software structure** <br> This includes the database, the front-end, and the back-end. How will the solution look like? Is it a tool that runs locally and does static analysis on the data? Or is it a web application that connects to a database?

**4. Get Feedback:** <br> Regularly ask stakeholders for feedback on the project and to an extent the dashboard. Use their input to make improvements and adjustments as needed. This includes Fontys as well.

**5. Get the Data:** <br> Organize the data needed to populate the dashboard. This is from the feedback in the form of informal Q/A, surveys, interviews, and other sources.

**6. Show Data Well:** <br> Use graphs, charts, and other visual tools to present the data in an understandable way. Make it easy for anyone to see trends or patterns at a glance.

**7. Explain How to Use It:** <br> Provide clear instructions on how to use the dashboard effectively. Include tips or guidance on interpreting the data as well as how to set up.

**8. Share the Results:** <br> Share the dashboard and its results with the team. Discuss the findings and how they can be used to improve the product.
