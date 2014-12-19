Phaser Project Template (JavaScript) For Visual Studio 2013
==================================

This is a basic project template for The Phaser HTML Game Engine using JavaScript in Visual Studio 2013

#Setup
##The Easy Way (Ideal for new projects):
We have created a VSIX install package that is available within Visual Studio.

1. Open up Visual Studio 2013
2. Navigate to 'Tools' -> 'Extensions & Updates...'
3. Type in the template name in the searchbar - Phaser Template Javascript - make sure 'Online' is selected on the left
4. Install template
5. Go To 'File' -> 'New Project...' dialog
6. Under the CSharp category you will find the installed template, alternatively you can type the template name into the search bar in the top right corner.

As a side note, there doesn't not seem to be any way to install our template under the JavaScript project type. The only values I could enter were CSharp, VB or Web, and Web didn't seem to work for us. But don't worry, the CSharp thing is meaningless - it adds no CSharpy stuff to our project!

Direct Link:
https://visualstudiogallery.msdn.microsoft.com/e6eeccc4-3963-4e3d-8181-77d94ae67d9a

##The Manual Way (Ideal for existing projects):
If you have an existing project that you would like to add these basic files to then you can always just download this GitHub zip file (located as a link on the right of this page) and add in the files you need to the project. We recommend adding in the package.json file (and following instructions below) in order to get the latest Phaser Build.

---
---

#Installing the Phaser Package:
**Okay so the first thing you might notice when opening up your new project template is that the Phaser package files are actually missing.**
We did not want to include the Phaser files in the project as any new releases of Phaser would invalidate this template.
There is also no Nuget package for Phaser.

Thankfully Visual Studio has recently added NPM and Grunt support to it's IDE and there is an NPM Phaser package. For the uninitiated NPM is like a Node version of Nuget. It's fully baked into VS 2015 but as we are using 2013 we will need to install a couple of extensions to get up and running.

##Pre-Steps
We have to install Node and NPM. There's no way around this. If we want to use NPM we need to have Node. Don't worry if you're not a command line wiz, we only have to run a couple of commands before returning to Visual Studio.

1. Install Chocolatey - This is the easiest way to install Node on Windows (ref: http://www.johnpapa.net/get-up-and-running-with-node-and-visual-studio/)

Run this command in the Command Prompt to install Chocolatey:

  ```
  @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object     net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
  ```

2. To install Node and NPM just run the next command in the Command Prompt:

  ```
  choco install nodejs
  ```

3. Install the VS 2013 NPM Extensions

  We need 1 extension installed with 2 other optional installs
  In the 'Tools - Extensions and Updates...' dialog search for and install 'Grunt Explorer'
  https://visualstudiogallery.msdn.microsoft.com/dcbc5325-79ef-4b72-960e-0a51ee33a0ff
  This wil allow us to easily install the NPM Phaser package.

There are a couple of other extensions you should install to get the full NPM and Grunt experience.

Package Instellisense - https://visualstudiogallery.msdn.microsoft.com/65748cdb-4087-497e-a394-2e3449c8e61e

Task Runner Explorer - https://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708

For more info on these check out Scott Hanselman's post: http://www.hanselman.com/blog/IntroducingGulpGruntBowerAndNpmSupportForVisualStudio.aspx

Okay we are now ready to add the latest Phaser build

##Installing The Phaser Package
1. All we need to now do is right-click on the package.json file and click on 'NPM install packages'.
2. This will add the Phaser package in a 'node_modules' folder
3. If the folder does not appear in your Solution Explorer you may need to add it to your project manually.
4. Simply click on the 'Show All Files' button at the top of the Solution Explorer. The node_modules folder should appear with the Phaser folder inside it.
5. You can simply leave it like this or right click on the node_modules folder and 'Add To Project'
6. You're now ready to roll
7. We have added some basic Phaser code in the app.js file to get you started. The files in this template are actually a completed version of the "How to use Phaser with Typescript - getting started guide" - but adapted to be Javascript instead Typescript! http://www.photonstorm.com/phaser/how-to-use-phaser-with-typescript

What's great about this approach using NPM is that it guarantees that the phaser files you are using are always from the very latest build of the package!
