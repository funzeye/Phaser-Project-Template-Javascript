Phaser Project Template (JavaScript) For Visual Studio
==================================

This is a basic project template for the Phaser HTML Game Engine using JavaScript in Visual Studio 2015. Should also work in 2013 version but you may need to add bower support for 2013 version.

It can of course **be used for non-Visual Studio projects also**. Simply download the Zip file and add the contents of the Phaser-Project-Template-Javascript to your project. You can remove the .config and .sln files from your project as these are Visual Studio specific. 

TypeScript Version: https://github.com/funzeye/Phaser-Project-Template-TypeScript

Still learning about Phaser? Be sure to check out our book ["Making Your First HTML5 Game with Phaser"](http://leanpub.com/makingyourfirsthtml5gamewithphaser)

# Setup
## The Easy Way (Ideal for new projects):
We have created a VSIX install package that is available within Visual Studio ([currently over 10k installs](https://marketplace.visualstudio.com/items?itemName=DavidKivlehan.PhaserGameTemplate-JavaScript)!!)

1. Open up Visual Studio
2. Navigate to 'Tools' -> 'Extensions & Updates...'
3. Type in the template name in the searchbar - Phaser Template Javascript - make sure 'Online' is selected on the left
4. Install template
5. Go To 'File' -> 'New Project...' dialog
6. Under the CSharp category you will find the installed template, alternatively you can type the template name into the search bar in the top right corner.

As a side note, there doesn't not seem to be any way to install our template under the JavaScript project type. The only values I could enter were CSharp, VB or Web, and Web didn't seem to work for us. But don't worry, the CSharp thing is meaningless - it adds no CSharpy stuff to our project!

Direct Link to VSIX install file:
https://visualstudiogallery.msdn.microsoft.com/e6eeccc4-3963-4e3d-8181-77d94ae67d9a

## The Manual Way (Ideal for existing projects):
If you have an existing project that you would like to add these basic files to then you can always just download this GitHub zip file (located as a link on the top right of this page) and add in the files you need to the project. We recommend adding in the bower.json file (and following instructions below) in order to get the latest Phaser Build.

---
---

# Installing the Phaser Package in Visual Studio:
**Okay so the first thing you might notice when opening up your new project template is that the Phaser package files are actually missing.**
We did not want to include the Phaser files in the project as any new releases of Phaser would invalidate this template.
There is also no Nuget package for Phaser.

Thankfully Visual Studio has recently added Bower support to it's IDE. For the uninitiated Bower is like a client-side version of Nuget. It's fully baked into VS 2015, so if you are still using 2013 you may need to install a couple of bower extensions.

## Installing The Phaser Package
1. All we need to do is simply build our project in Visual Studio!! Our Phaser files will be added during this build into the lib folder.
