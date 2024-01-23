# Contribute to react-tag-commander

We're delighted that you're interested in contributing to react-tag-commander! This document is intended to outline the process and guidelines for contributing to this repository. We want to make contributing to this project as easy and transparent as possible.

## Getting Started

1. **Fork the repository**

Start by forking the repository on GitHub. This will create a personal copy for you to work on.

2. **Clone your fork**

Clone your fork to your local machine. Replace `your-username` with your GitHub username.

```bash
git clone https://github.com/your-username/react-tag-commander.git
```

3. **Set up remote upstream**

Add the original repository as an upstream remote to your local repository.

```bash
git remote add upstream https://github.com/CommandersAct/react-tag-commander.git
```

4. **Install dependencies**

Navigate to the project directory and install its dependencies.

```bash
cd react-tag-commander
npm install
```

## Making Changes

1. **Create a branch**

Create a new branch for your changes.

```bash
git checkout -b feature/my-new-feature
```

2. **Make your changes**

Edit, add, or delete files as necessary for your contribution.

3. **Follow the coding standards**

Ensure your code adheres to the coding standards used throughout the project.

4. **Write tests**

If you're adding new functionality, please write tests to accompany it.

5. **Run the tests**

Ensure all tests pass before submitting your changes.

```bash
npm run test
```

6. **Document your changes**

Update the documentation to reflect any changes you have made.

7. **Update the Sample App**

Update the `tag-commander-sample-app` to reflect any changes you have made. Ensure that it is still running and add new examples if possible to illustrate your changes.


## Submitting Changes

1. **Commit your changes**

Commit your changes with a clear and descriptive commit message.

```bash
git commit -m "Add a brief description of your changes"
```

2. **Fetch upstream changes**

Fetch any recent changes from the upstream master branch.

```bash
git fetch upstream
```

3. **Rebase your branch**

Rebase your branch on top of the upstream master.

```bash
git rebase upstream/master
```

4. **Push your changes**

Push your changes to your fork.

```bash
git push origin feature/my-new-feature
```

5. **Create a pull request**

Go to your fork on GitHub and create a pull request against the [CommandersAct/react-tag-commander](https://github.com/CommandersAct/react-tag-commander) 's master branch.

## Reporting Issues

If you find any bugs or have a feature request, please create an issue on GitHub using the issue tracker.
