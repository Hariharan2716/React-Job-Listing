I was working with Card component, HomeCard components which helped me to learn to work with connecting components and learned how individual components can be re-used.
Added a HomeCards component and rendered it in the App.jsx.

## Job Listings
1. To create a local data so in order to experience how a dynamic data would be working.
2. Created Component JobsListings.jsx which helps to hold job information.
3. Created a JobListing component this holds the individual job listing and renders via importing this component to JobsListing the individual jobs are rendered and displayed.
4. Create a json file called jobs.json which holds data of jobs available.
5. Singular use JobListing.jsx to create a framework meaning how a single job card or detail should look like.
6. After that came back to JobListings.jsx and import the JobListing component and render it.
Now in JobListings, we created a list using the imported JobList component, use jobs.map with a function to display all the jobs dynamic.
7. Import JobListings component to App.jsx.

