Somewhere around November 2019, just a few weeks after I had updated my online profiles to include UX/UI as a field I was interested in, I received a connection request on LinkedIn. An Android developer from Mumbai, Chintan, had come across my profile and wanted help with his project that he wanted to publish and share with his community.

# What is it about?

Nitya Gaan is a mobile app that allows users to perform their daily religious activity according to the community's practices. It helps users to do so by making available a catalogue of prayers or bhajans available that they can access anytime, even offline. It has a reminders section where users can set time for each activity, and the app would then fire an alarm at that time.

## Existing features

- **Catalog of prayer/bhajan text** for reading, and a few of them accompanied by audio.
- **Alarms for reminding about the daily activities** that the users can enable and set a time for.
- **Localization In Gujarati**, as the community is largely Gujarati.

---

# The Problem

Chintan was looking for a designer to help him make the app more user-friendly. When he shared the app to some of his friends and family, he felt that he was having difficulties explaining the interface to them. He wanted it to be intuitive but his users had more questions than he had expected. He was also not pleased with the visual design of the app and wanted to make it more appealing.

## Constraints

- **This project was under a deadline**, as the people who were involved with it only had a few weeks to spare, and Chintan could also give only a month to this project. I had about 2 weeks to finish up the design.

- **Technical constraints**, were to ensure the design was easy to implement based on the standard Google Material Design components available on Android, that could be customized to an extent. The app had to be implemented quickly, and without using custom workarounds.

---

# Capturing pain points in the existing app

Based on my own usage of the app, and through feedback from users that Chintan had collected, the main pain points that caused poor user engagement were identified.

### The option to switch to Gujarati was difficult to see

It had been implemented as a Floating Action Button (FAB) that forked into two buttons on pressing. They could then choose their language by pressing the button with their language's icon on it.

- The initial FAB did not have an accompanying label to go with it, and instead only had a globe icon 🌐 on it. Those unfamiliar with the visual language of iconography could not identify what it would do. Also, FABs work best to present a frequently done action, or the primary action of the app (such as "compose email" or "add a note").

- When this FAB was pressed, it split in two, one with a Gujarati character on it, and one with an English/Latin character. This could be difficult for people to see directly, as the size of these icons was smaller.

### The categories of the prayers was not easy to differentiate

The list of categories was implemented as a 2-column grid and was presented as a tile style button with a large icon on top, and a text label below it.

- The pattern was difficult to see, as they had to read the labels to identify what the category was.

- The icon paired with the labels were not contextually fitting. The users could not identify the category solely based on the icons used.

- The grid was monotonous in colour, and the only the icons and labels of each tile were different.

### The UI of reminders did not show the status of the reminders directly

The reminders were implemented to be similar in appearance to the standard Alarm app in Android: A list of horizontal tiles with the time and label on them.

- The status of the reminders (whether enabled or not) was not visible.

- The option to change the time could be triggered by tapping on the time label. This feature was conveyed to the users by a popup that would be displayed the first time the user entered the reminder section. This was not a good solution, as it was highly likely that the users might ignore to read the modal's text or forget what it said.

### Visual design could use some improvements

- **Boring colours**: The app had a dull dark yellow colour scheme.
- **Outdated look**: The app used the Google Material components that are the default way of implementing interfaces in Android. As a result, the app looked like a generic Material app from 2014 and was not up to current standards.

---

# Understanding the users

## Target Audience

This app was intended to be used by all the members of the community. A majority of this community were adults and consisted of people who were:

- Young professionals - natives of the Digital age, these users were Millenials and frequent smartphone users.

- Employed adults - worked in companies, familiar with the internet, and would use computers and phone for work, and the occasional social media.

- Business Owners - Ran their own business, with limited technical ability, but would use a smartphone for basic functions and the occasional social media (WhatsApp & Facebook)

- Retired adults - Senior users who would use a smartphone for basic calling purposes, but were new to the internet and mobile apps. 


It was safe to assume that most of the community would carry a smartphone, and operate basic apps like WhatsApp. We wanted to ensure the design had high usability and was accessible enough and easy even for seniors to pick up.

Chintan observed that most of the participants would either carry printed copies and books (which was the case with the more older folk) or use downloaded PDFs and scanned copies. To offer a simpler, easy to use solution, he approached the community organizers to catalogue all the prayers and put them on his app.

## User Research

In order to understand the users better, and to eliminate the bias of our own, we reached out to the users with questions. As I was hundreds of miles away from Mumbai, I delegated the actual interviewing to Chintan, who would go to the temples and halls to meet his potential users and talk about the app.

I made a list of features and approaches that would help achieve the goals of the app. We wanted to sort the features based on relevance an priority, so the app would be less cluttered and would best fit the users' needs.

To identify what the users expected from the app, I prepared a Google Forms with a set of questions asking them about their language preferences, the apps that they used extensively, if they use accessibility features, etc. Chintan would either ask these questions in person or collect responses from the Google Form.

## What we learnt

![Graph of insights showing statistics described below](https://github.com/roshanrahman/newportfolio/raw/master/assets/casestudies/nitya-gaan/img1.png)

- Although about 70% of the users had been using their devices in English and could read English, the remaining majority of people were more comfortable reading Gujarati and wanted to use devices in Gujarati. Some of them were already using Gujarati as their system language.

- We wanted to evaluate the option of dark theme to increase readability, and as a means to customize the user experience. 58% of the participants responded that they switched to dark themes. Though more than 50% of the participants told us they limited their phone usage to only a few hours a day - and that they avoided using it at night - those who were not familiar with dark theme did like the idea of using a dark theme, especially those who had difficulties reading on their phones with poorly lit surroundings.

- At least 15% of the participants had difficulties reading on their phones, and used larger font size, and a few people used accessibility features, such as magnifier. We wanted to make it easier for users to customize their reading view, to ensure it is as accessible as possible.

---

# The Solution

In this section, I list out the various changes that I made to the interface. This project was designed in Figma.

## My Goals

Before I began designing, I laid out the goals that I wanted the new design to achieve:

- Reduce as many clicks as possible. Keep only the minimal amount of taps needed.

- Avoid using gestures. Keep only button-based navigation and simple scrolls.

- Be more contextual, and ensure it has heuristics that inform the users of the app's state, and wherever possible, allow them to change it.

- Have a cleaner, simpler, modern take on the aesthetics, with a Material, styled design that looked good, and was not a nightmare for the developer to implement.

- Increase usability by making items easier to distinguish.

- Provide options to change language, theme and font size at any time. Overall, keep the design open and scalable, so additional features could be added easily.

### ગુજરાતી upfront, right on the header

![Mockup showing language button in header](https://github.com/roshanrahman/newportfolio/raw/master/assets/casestudies/nitya-gaan/img2.png)

I made the option to change the language into a button and placed it right next to the App Title.

This way, people don't have to find the option to change the language. If they prefer Gujarati, it's the first thing they'll see, and they don't have to struggle to go through the English parts to identify where the language setting is. Also, it has a text label so it is less ambiguous than using an icon in its place.

### Single column, colourful List Tiles

![Mockup showing single column, colourful list tiles](https://github.com/roshanrahman/newportfolio/raw/master/assets/casestudies/nitya-gaan/img3.png)

I changed the 2-column grid into a single column grid, making the direction of flow simpler. No zig-zag pattern here.

I used the idea of a strongly coloured background, with a little translucency that revealed a relevant background image. This made it possible to distinguish the item by colour, and the background image was also an indicator of what the category is for.

This made it easy for people to communicate which one to go to - For example, _"Click on the red one"_ is easier for people to follow.

### Bigger, bolder reminders

![Mockup showing bigger, bolder reminders](https://github.com/roshanrahman/newportfolio/raw/master/assets/casestudies/nitya-gaan/img4.png)

I made the alarm list tiles, i.e. the items that let you set the time for reminders, appear bigger and made the label have thicker font-weight.

I turned the popup message into a card-like component sitting on top of the header, which could be dismissed by the user. This was a less intrusive way of guiding the user.

Used grey and white in disabled and enabled states to express the different states better.

The entire space of the time & label area could be tapped to trigger the time picker. Previously it was only possible to tap on the time.

I also redesigned the screens that would pop up when it was time for the alarm to ring.

![Mockup showing reminder alarm screens](https://github.com/roshanrahman/newportfolio/raw/master/assets/casestudies/nitya-gaan/img5.png)

### Contextual components on the home screen

I wanted to make the home screen (the screen with the category list) more dynamic, and display the app's status in a more visible way.

One important app state was the state where a reminder was imminent. If the user was already on the app just before the reminder was about to go off, the firing of the reminder could be cancelled. So, I made a contextual component that would appear when a reminder was just minutes away. The user could then easily cancel that reminder as they're already on the app.

### Customization options in Reading View

I designed a component that contained options that would allow the users to customize the text size, language and theme at any time. This popup component made it possible for users to customize the experience right from the reading view. They didn't have to go to settings to make these changes.

### Visual Design

For the interface design, I chose Lato as the primary typeface for headings. It has several font weights that look very good on the screens. I used the system default Roboto for the text.

I used a vibrant orange pumpkin colour (#FF6712) as the primary colour, that could be paired with a simple white or dark (#121212) background and foreground colours.

![Mockup showing light and dark themes](https://github.com/roshanrahman/newportfolio/raw/master/assets/casestudies/nitya-gaan/img6.png)

The images used were from Unsplash.com. They were edited and overlayed with a gradient that would fade away just a little, revealing the image underneath it. I used this concept of gradients and images underneath them for the alarm screens as well.

I designed a dark theme as well, with #121212 as the primary background colour. As per the Material guidelines, to express elevation, I used lighter shades of grey, such as #858585.

I followed the Material guidelines and maintained a simple, label on selected item variant of the bottom navigation. As it was difficult to customize soft shadows, I kept the default elevation shadows of Material, and used the default card style, with only the border-radius set to a bit higher.

### Branding

I also designed the logo and Play Store assets for the app.

When this design was shown to the various community members, it was well-received, and they offered ideas for the logo to go with it. We received an idea that depicted a man in the posture of meditation, with an aura resembling a flower.

![Screenshot of some icons](https://github.com/roshanrahman/newportfolio/raw/master/assets/casestudies/nitya-gaan/img7.png)

I incorporated this idea into an icon, using a simple geometric design. I was playing around with the idea of using elements that could be combined into a single image, but could also be displayed separately, creating a brand of apps. This was a fun experience with some basic graphic design.

![Screenshot of some branding assets](https://github.com/roshanrahman/newportfolio/raw/master/assets/casestudies/nitya-gaan/img8.png)

---

# Outcome

The feedback on the design was positive. People noticed the newer, vibrant look and they expressed that it looked less cluttered. Chintan enthusiastically began implementing it.

On the Google Play Store, the app has received very high ratings, the crisp UX and the quality of the content was well appreciated.

Soon, after the redesigned app was published, the community members who really liked the app recommended it to their friends and family, and since then it has received thousands of downloads.

Chintan was approached by many community members suggesting new features to be added to it, and now this project has been opened again, with a new set of features that would make this app a connected, social experience.

## Lessons learnt

- This was my first project in which I did user research which was not limited to asking my friends and family. I learnt to check assumptions against research, with the niche groups of people, as the user research revealed statistics that were quite different from what I had guessed. Reduce bias as much as possible.

- This was also my first time working with a remote developer, and I gained a lot of experience sharing ideas and sending handoffs to him. This increased my confidence in doing freelance and remote work.

- I learnt about usability heuristics.

This was an absolutely fun challenge, and I learnt a lot working on this project. Most importantly, throughout this process, Chintan and I enjoyed working with each other and quickly became good friends, and since then we have worked on many projects together.

---
