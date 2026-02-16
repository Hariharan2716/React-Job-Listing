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
8. To keep the Home page neat and clean, there should be only 3 jobs cards so used slice() so that only 3 JobLists render.
9. In Home page have a button to view all jobs for that create a individual component called ViewAllJobs which would redirect it to a page listing all react jobs.

### Working with useState
- In JobListing to make the job cards more UI/UX plesant so used useState creating a const [showFullDescription, setShowFullDescription] and setting the useState default to be false and setting the description to be between 90 letters using substring for this called the showFullDescription which is false by default
- Then added a button right under the description in a if-else condition so when showFu..is false the button would be More and if true Less.
- Next use of onClick event when the event is triggered run a function so with prevState so that the button acts dynamic when clicked.