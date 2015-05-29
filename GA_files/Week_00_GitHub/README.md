
##Lesson 00 - GitHub and version control

###Learning Objectives:

- Define a version control system (Git) and explain its benefits
- Initialize a local git repository and explain what it does for a developer
- Push local changes to a remote git repository using the GitHub app
- Pull changes from a remote git repository to a local computer using the GitHub app
- Connect local repositories to remote repositories using the GitHub app


<br>

---

| **Section**   | **Timing** | **Description**                                      |
|---------------|------------|------------------------------------------------------|
| Opening       | 10 mins    | What is Git / GitHub?                                |
| We Do         | 15 min     | Set up your first GitHub repo with GitHub app        |
| Closure       | 10 min     | Review work flow; Explain Git / GitHub benefits      |

**NOTE**: This is a lesson insert recommended for lesson 01_html_basics. 

<br>

---


###Connection to a long term learning goal

GitHub is a tool that is vital to developers. GitHub allows developers to work collaboratively and  asynchronously and gives developers a way to store code history. In the context of this class, students will use it as a tool to submit assignments and download files.  Throughout this class, instructors will use it to assess and review student work and provide feedback.

<br>

---


###Before Class (Student Pre-work)

Students are required to follow the steps in the FEWD GitHub guide before class. They are also required to watch the [GitHub video](https://generalassembly.wistia.com/medias/jkrycndgrs). This lesson will help refresh students on this process and also serve as an opportunity to answer any questions.

Before class 1 - students should send the instructors the following via Schoology:

1. Their GitHub username
2. A link to their first repo


---

<br>



#Lesson Outline

##Opening: What is GitHub? - 10 minutes

####Some important vocabulary relating to Git/GitHub

* **git** - a version control program that saves the state of your project's files and folders; basically, it takes a "snapshot" of what all your files look like at a moment and stores a reference to that "snapshot"
* **repository** - a central location in which data - typically about a project - is stored and managed
* **clone** - download data from the cloud to your local machine (laptop, computer, etc.)
* **branch** - a version of a project that developers can work on
* **commit** - save a version of your project to git 
* **pull request** - a request to combine branches of the same project

####What is GitHub?

* GitHub is a platform makes it easy to manage git repositories. It is now commonplace in any company that works with engineers.
* Stores files like Dropbox or Google Drive, but stores code.
* Stores a history of files and the changes that happens within each changed document.
* Hosts files on the cloud so you can share the finished product with other people.
* Git - the technology that Github is based on top of - was designed to allow for multiple engineers to work on the same project.

####Why is GitHub Valuable? Why do developers use GitHub?

* Since GitHub stores a history of the code, it allows developers to go back in time if something breaks.
* GitHub allows multiple developers to work on the same project. Much like Dropbox or Google Drive lets multiple people collaborate on the same document, GitHub allows this for code.
* GitHub tracks changes so you can see who worked on what.
* GitHub allows for feedback to be given on the code, which hopefully, increases code quality. Much like an editor updates a Word document using Track Changes, GitHub allows a similar environment.

####How does GitHub work in a collaborative environment?

GitHub's collaborative process can work many different ways, but this is the most common:

1. Each GitHub project is called a "repository". Engineers joining a team start by "cloning" the repository (or repo, for short). 
    - Remember: "Clone" means that we are copying our GitHub repository from the cloud and saving it as a local folder on our computer.
2. The main, stable version of the codebase is on the default "branch" in GitHub which is called "master".
    - Engineers typically create new branches for certain features or portions of the code they will work on.
3. As they are working they "commit" changes to their branch. This allows them to create a history of what they are working on so they can go back in time if an issue pops up.
4. When the engineer feels confident that the code is stable and the feature they are working on is complete, they open a "pull request" to "merge" their branch to master.
5. If there are multiple engineers working on a project, other engineers will review the "pull request" and provide feedback.
6. When the branch has been updated to reflect the comments it is "merged" back into the main "master" branch.

For this course, we will not be dealing with branches or pull requests. We will be working with our own default "master" branch for each of our projects. 

<br>

---

##We Do: GitHub Refresher/Setup a repo - 15 minutes


####Directions to instructors:

Students will come to the class having followed the directions on the GitHub guide and watched a video on GitHub. They should all have a GitHub account, their first repository and the GitHub App installed on their machines.

This lesson is an opportunity for students to ask questions and also make sure that students understand the GitHub process as they will be submitting all of their homework via the app.

Make sure to have the GitHub app installed, a class repo, and be logged into your account before class. We have found that using Terminal for GitHub interaction is out of the scope of this course. Please, be sure to use the GitHub app for version control in this class.

This can be framed as a "code along" because students should have practiced this before the course. Remember to ask students for questions as every step in the process as you walk students through creating a repository. 

####Directions to students:

1. Log on to GitHub.com and press the big green button for "New Repository".
2. Finish setting up the repo by adding a name to the repository. The default settings (public, no organization, no readme) are fine.  Name your repository "cookie_recipe".
3. Add our website’s files to it. To get started, click on the “Set up in Desktop” button. This brings everyone back to the GitHub App.
4. When the app opens, a message should pop-up that says “Clone As” with the name of our new repository pre-entered.

#####CFU:

The Instructional Team should go around and confirm that each student has this message on their screen.

5. Save the repository to wherever you saved your FEWD class folder.
6. Let's add files and folders to your project.  At this stage, you won't have any of your own projects, but you do have the starter code from today's class. Open up Finder and drag the contents of the cookie_recipe project starter code to your first repo project. Make sure you don't include the cookie_recipe folder just the contents of that folder.
    - NOTE: You should always preserve directories (folders) when dragging files in.
7. Go back to the GitHub app and select the "Changes" tab.  As a "commit message" for now, you can just put “syncing my new repository!”, but as you do other projects you will want to commit frequently and your commit messages might look like “changed the background color and logo size per client’s request.”
8. Hit the "Commit to master" button at the bottom and the "Publish" button.
9. Go back to GitHub.com and refresh your repository page. You should now see the cookie recipe's files inside.


#####CFU:

The instructional team should verify that everyone in the class has a repository called cookie_recipe (or similar) with the cookie recipe files inside of it on GitHub.com

##Closure: Reviewing GitHub work flow; Explain Git/GitHub benefits - 10 minutes

- *Explain* that throughout this class, students will use GitHub as a tool to submit assignments and download files; instructors will use GitHub to assess and review student work and provide feedback.

- Walk students through the [FEWD GitHub work flow document](Week_00_GitHub/GitHub_workflow_for_student_submissions.md) 

- Also, quickly show students where they can access in-line comments on their commits on the projector:

  - Use [this](http://youtu.be/gQzWFRKZUSA?hd=1) video to show students how to navigate their GitHub account to access in-line comments
  - After, point out that they will also get an email when they get a comment on their code, too:
  ![GitHub comment info](http://oi62.tinypic.com/wbqhcl.jpg)


- Finally, ask a different student answer each one of these questions: 

    - Explain Git.
    - Explain GitHub.
    - Describe the benefits of using these programs / applications. 




