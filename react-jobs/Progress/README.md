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

### React Router-Dom
Imagine React app like a Magic storybook.  a book only shows one page at a time. **React-router-dom** is the special tool that lets you turn the pages and see different part of the story without having to throw the whole book away.

`createBrowserRoute` (The Brain) - This is the Brain of the book, it keeps a secret list in its head of every page you want to have -> It knows exactly which room belongs to which name.

`Route` (The Name Tags) - These are the name tags put on the door.

`createRoutesFromElements` (The Helper) 
The Brain is very smart but prefers to read lists in a special way. 

`RouterProvider` (The Magic Door)
If you have a Brain and Name tags, you still need a way to actually enter the story! this is like the door. put in main page so when you click a button, can swap the pages .

### MainLayout 
In a React project, a Layout is like the frame of a picture that stays the same while the picture inside changes.

It is a special component used to keep things like Header, Footer, or Sidebar on the screen all the time, even when you move between different pages. 

In the MainLayout we use Outlet component from react-router-dom, what ever route on the content page(App.jsx) is going to come through the outlet.

### JobsPage component
Create a JobsPage that imports the JobListings from components and add the path to main page App.jsx inside the MainLayout Route component since the MainLayout component has outlet which always gives the Nav bar to every page having routes inside that would always render nav bar to every rendering page.

### Links tag
Link tags work different from a tags import Link from react router-dom
a tags does a complete page refresh but Link tag helps to keep the page load in client side itself so the no-loding time and no refresh.

Added Active navbar with the link tags when to differentiate the link tag.

From Link to NavLink this navlink acts the similar way but it adds a class to the active link.

Now to make the links responsive we use a function called isActive if it is true the className would have a black baground else transparent.

### Conditional Rendering
Worked with JobListings component to render on condition if it is Home page I wanted to display only 3 job cards but when in jobs page wanted to display all jobs so used if else, ternary operation.

### Json Server
To get the experience learning of backend I picked Json-server which is a MOCK API helps to get the understanding of fetching data from a database.

### Use Effect
Use Effect allows our components to have side effects. wanted a effect of fetching data when the component renders

### Proxy
In vite.config.js file add the proxy object with target, changeOrigin, and rewrite the path with carrot.
Proxy a person, document... authorized to act on behalf of another, serving as a substitute or representative.

### Reflect
I was working with a faulty api url The bug is tiny but deadly 
`/api/jobs?_limit= 3`
I added a space before 3 in the query string. => so the request actually became ...limit= 3 That space gets URL-encoded to %20 the backend recives:  url as **_limit=%203**.
Where API tries to parse " 3" not 3. 
Depending on the backend, they can ignore the limit or return wrong data or break the request completely.

**This is a classic bug. One invisible space - > broken API call**

### Single Jobs Page
To create a page that describes how a single job details would look like.

### Add Job pass function as a property
Created a page component to add job and passing a function as a property to the function AddJobPage arrow function.
Once the addJobSubmit function is triggered it redirects to the add-job page adding the submited form as a new joblisting.
For that use Hook - navigate hook from react router dom, initialize before its use.

addJobSubmit is passed as a property so in App component call the prop in the component AddJobPage