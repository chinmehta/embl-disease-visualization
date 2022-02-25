# EMBL Disease Visualization

## Application Functional Flow

1.  On load, web application will request data from GraphQl API's `disease` endpoint

2.  Sort the data in descending order per score.

3.  Pick top 10 items from sorted array.

4.  Pass The shortlisted array to table component.

5.  Table component will contain cell components to display the data.

6.  Table will contain 4 columns components: `Accordion button`, `Approved Symbol`, `Gene Name`, `Overall Score`.

7.  `Accordion button`

    - Type: button Component.
    - Click: onclick it toggles show/hide a tab component containing graphs components.
    - Display Condition: Hide this component of there is no graph data for particular row.

8.  `Approved Symbol`

    - Type: Hyper Link Component.
    - Click: On click of it redirects to details page for that row.

9.  `Gene Name`: Contains Name of gene label.

10. `Overall Score`: Contains over all association score label.

11. `Tab Component` contains 2 tabs: `Bar Chart` & `Radar Chart`.

12. Every row will display graphical visualization in 2 formats: `Bar Chart` and `Radar Chart`. Switching tabs will switch between display types.

## Application Flow Chart

![Application Flow Chart Image](/images/Application-Visual-Flow-Chart.png)
