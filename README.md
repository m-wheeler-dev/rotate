Page overlay / rotation reveal

One of my first projects!

Click the hamburger menu to cause the page content to rotate, revealing the nav menu.

<img width="500" alt="Screenshot 2023-12-19 at 8 18 54 PM" src="https://github.com/m-wheeler-dev/rotate/assets/105622101/8c352a24-2f52-493b-8768-ffc3f63b9054">

<img width="500" alt="Screenshot 2023-12-19 at 8 18 18 PM" src="https://github.com/m-wheeler-dev/rotate/assets/105622101/e64e88a3-2a86-49c9-a4cf-98a6c8efaa9b">

<p>This was accomplished by building the nav menu with a full-page container, and then doing the same with the page content and placing the content "on top" of the nav container. </p>
When the menu button is clicked, the primary content container rotates and reveals the nav menu.
The items of the nav menu are positioned off-screen and animate over to fill in the new blank space created by the rotation.
They then animate back off-screen when the close button is clicked and the page rotates back to its original position.
