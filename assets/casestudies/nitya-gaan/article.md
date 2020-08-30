Somewhere around November 2019, just a few weeks after I had updated my online profiles to include UX/UI as a field I was interested in, I received a connection request on LinkedIn. An Android developer from Mumbai, Chintan, had come across my profile, and wanted help with his project that he wanted to publish and share with his community.

# What is it about?

Nitya Gaan is a mobile app that allows users to perform their daily religious activity according to the community's practices. It helps users to do so by making available a catalog of prayers or bhajans available that they can access anytime, even offline. It has a reminders section where users can set time for each activity, and the app would then fire an alarm at that time.

## Existing features

- **Catalog of prayer/bhajan text** for reading, and a few of them accompanied by audio.
- **Alarms for reminding about the daily activities** that the users can enable and set a time for.
- **Localization In Gujarati**, as the community is largely Gujarati.

## Goals

---

# The Problem

Chintan was looking for a designer to help him make the app more user-friendly. When he shared the app to some of his friends and family, he felt that he was having difficulties explaining the interface to them. He wanted it to be intuitive but his users had more questions than he had expected. He was also not pleased with the visual design of the app, and wanted to make it more appealing.

## Constraints

- **This project was under a deadline**, as the people who were involved with it only had a few weeks to spare, and Chintan could also give only a month to this project. I had about 2 weeks to finish up the design.

- **Technical constraints**, were to ensure the design was easy to implement based on the standard Google Material Design components available on Android, that could be customized to an extent. The app had to be implemented quickly, and without using custom workarounds.

---

# Capturing pain points in existing app

Based on my own usage of the app, and through feedback from users that Chintan had collected, the main pain points that caused poor user engagement were identified.

### The option to switch to Gujarati was difficult to see

It had been implemented as a Floating Action Button (FAB) that forked into two buttons on pressing. They could then choose their language by pressing the button with their language's icon on it.

- The initial FAB did not have an accompanying label to go with it, and instead only had a globe icon 🌐 on it. Those unfamiliar with the visual language of iconography could not identify what it would do. Also, FABs work best to present a frequently done action, or the primary action of the app (such as "compose email" or "add note").

- When this FAB was pressed, it split in two, one with a Gujarati character on it, and one with an English/Latin character. This could be difficult for people to see directly, as the size of these icons was smaller.

### The categories of the prayers was not easy to differentiate

The list of categories was implemented as a 2-column grid, and was presented as a tile style button with a large icon on top, and a text label below it.

- The pattern was difficult to see, as they had to read the labels to identify what the category was.

- The icon paired with the labels were not contextually fitting. The users could not identify the category solely based on the icons used.

- The grid was monotonous in color, and the only the icons and labels of each tile were different.

### The UI of reminders did not show the status of the reminders directly

The reminders were implemented to be similar in appearance to the standard Alarm app in Android: A list of horizontal tiles with the time and label on them.

- The status of the reminders (whether enabled or not) were not visible.

- The option to change the time could be triggered by tapping on the time label. This feature was conveyed to the users by a popup that would be displayed the first time the user entered the reminder section. This was not a good solution, as it was highly likely that the users might ignore to read the modal dialog's text, or forget what it said.

### Visual design could use some improvements

- **Boring colors**: The app had a dull dark yellow color scheme.
- **Outdated look**: The app used the Google Material components that are the default way of implementing interfaces in Android. As a result, the app looked like a generic Material app from 2014 and was not up to current standards.

---

# Understanding the users

## Target Audience

This app was intended to be used by all the members of the community. A majority of this community were adults, and consisted of people of all working backgrounds, including students, skilled professionals, business owners, housewives and retired seniors. Only a portion of the community were technically sound, as they were literate and from the Millenial/Internet age, but it was safe to assume that most of the community would carry a smartphone, and operate basic apps like WhatsApp.

Chintan observed that most of the participants would either carry printed copies and books (which was the case with the more older folk), or use downloaded PDFs and scanned copies. To offer a simpler, easy to use solution, he approached the community organizers to catalog all the prayers, and put them on his app.

## User Research

In order to understand the users better, and to eliminate bias of our own, we reached out to the users with questions. As I was hundreds of miles away from Mumbai, I delegated the interviews to Chintan, who would go to the temples and halls to meet his potential users and talk about the app.

I made a list of features and approaches that would help achieve the goals of the app. We wanted to sort the features based on relevance an priority, so the app would be less cluttered and would best fit the users' needs.

To identify what the users expected from the app, I prepared a Google Forms with a set of questions asking them about their language preferences, the apps that they used extensively, if they use accessibility features, etc. Chintan would either ask these questions in person, or collect responses from the Google Form.

## What we learnt

- Although about 70% of the users had been using their devices in English, and could read English, the remaining 30% of people were more comfortable reading Gujarati and wanted to use devices in Gujarati. Some of them were already using Gujarati as their system language.

-
