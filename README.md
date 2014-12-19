Phaser Project Template Javascript
==================================

This is a basic project template for The Phaser HTML Game Engine using JavaScript in Visual Studio 2013

#Setup:
##The Easy Way (Ideal for new projects):
We have created a VSIX install package that is available within Visual Studio.
1. Open up Visual Studio 2013
2. Navigate to 'Tools' -> 'Extensions & Updates...'
3. Type in the template name in the searchbar - Phaser Template Javascript - make sure 'Online' is selected on the left
4. Install template
5. Go To 'File' -> 'New Project...' dialog
6. Under the CSharp category you will find the installed template, alternatively you can type the template name into the search bar in the top right corner.

As a side note, there doesn't not seem to be any way to install our template under the JavaScript project type. The only values I could enter were CSharp, VB or Web, and Web didn't seem to work for us.

Direct Link:
https://visualstudiogallery.msdn.microsoft.com/e6eeccc4-3963-4e3d-8181-77d94ae67d9a

##The Manual Way (Ideal for existing projects):
If you have an existing project that you would like to add these basic files to then you can always just download this GitHub zip file and add in the files you need to the project

#Installing the Phaser Package:
Okay so the first thing you might notice when opening up your new project template is that the Phaser package files are actually missing.
We did not want to include the Phaser files in the project as any new releases of Phaser would invalidate this template.
There is also no Nuget package for Phaser.

Thankfully Visual Studio has recently added NPM and Grunt support to it's IDE. It's fully baked into VS 2015 but as we are using 2013 we will need to install a couple of extensions to get up and running.

#Pre-Steps
We hve to install Node and NPM. There's no way around this. If we want to use NPM we need to have Node. Don't worry if you're not a command line wiz, we will have to run a couple of commands before returning to Visual Studio.

1. Install Chocolatey - This is the easiest way to install Node on Windows (ref: http://www.johnpapa.net/get-up-and-running-with-node-and-visual-studio/)

Run this command in the Command Prompt to install Chocolatey
  @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object   net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin

2. Install Node and NPM
Run this command in the Command Prompt to install both Node and NPM:
  choco install nodejs

3. Install the VS 2013 NPM Extensions
We need 1 extension installed with 2 other optionsl installs
In the 'Tools - Extensions and Updates...' dialog search for and install 'Grunt Explorer'
https://visualstudiogallery.msdn.microsoft.com/dcbc5325-79ef-4b72-960e-0a51ee33a0ff
This wil allow us to easily install the NPM Phaser package.

There are a couple of other extensions you should install to get the full NPM and Grunt experience.
Package Instellisense - https://visualstudiogallery.msdn.microsoft.com/65748cdb-4087-497e-a394-2e3449c8e61e
Task Runner Explorer - https://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708

For more info on these check out Scott Hanselman's post: http://www.hanselman.com/blog/IntroducingGulpGruntBowerAndNpmSupportForVisualStudio.aspx

Okay we are now ready to add the latest Phaser build

##Installing The Phaser Package
1. All we need to now do is right-click on the package.json and click on 'Install NPM Packages'.
2. This will add the Phaser package in a 'node_modules' folder
3. If the folder does not appear in your soltion Explorer you may need to add it to your project.
4. Simply click on the 'Show All Files' button at the top of the Solution Explorer. The node_modules folder should appear with the Phaser folder inside it.
5. You can simply leave it like this or right click on the node_modules folder and 'Add To Project'

What's great about this approach is that it gareanttes that the phaser files you are using are from the very latest build of the package!
