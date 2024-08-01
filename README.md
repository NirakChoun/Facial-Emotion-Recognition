# Facial-Emotion-Recognition

# Introduction

Facial Emotion Recognition (FER) is a project designed to detect and identify emotions from facial expressions in real-time or from static images and videos. While this software is created primarily for educational purposes, it has potential applications in various fields such as crime detection, customer behavior analysis, healthcare, and employment (EDPS TechDispatch, 2021).

This software is a web application built using the following technologies:

## Programming Languages

- HTML/CSS
- Python
- JavaScript

## Frameworks

- Bootstrap 5 (Front-End)
- Flask (Back-End)

## Libraries and Technologies

- [Open-source FER software from GitHub](https://github.com/oarriaga/face_classification)
- Keras
- OpenCV
- SQLAlchemy

# Getting Started

To set up the project locally, follow these instructions:

1. Clone the repository.
2. Install the necessary dependencies.
3. Run the [app.py](http://app.py) file and place the generated IP address in the web browser.

## Software and Hardware Requirements

- Python 3.x
- Flask
- OpenCV
- Keras
- SQLAlchemy

# Features

The main feature of this software is detecting and displaying the emotion on a person's face. The detected emotions include: Happy, Sad, Neutral, Angry, and Surprise. This feature is implemented using the open-source program mentioned above.

## Emotion Detection with Registered People

As Mr. Dilton’s request to display the person’s, we decided to allow the users to register people with their image and name to the program’s database. Basically, the program will display their name and the detected emotion if they had already been registered, otherwise it will display unknown. Let’s take a look at the two scenarios. 

### Registered People

![Screenshot 2024-07-31 at 9.57.32 at night.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/08be76b6-1b69-4965-802d-68b681355b2d/a8eddbd8-3a10-4f84-856f-faeef787244e/Screenshot_2024-07-31_at_9.57.32_at_night.png)

This is the page where you can register a person’s name and image. For instance, we already registered the former president Barack Obama in our database, hence our program will know display his name on the screen.

**Webcam**

![Screenshot 2024-07-31 at 10.00.24 at night.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/08be76b6-1b69-4965-802d-68b681355b2d/70cebf7e-7c3f-48ac-b576-fbb48caf7c67/Screenshot_2024-07-31_at_10.00.24_at_night.png)

As you can see, even with different image of Obama, the program still recognizes who he is, hence displays his name.

**Screen Sharing**

![Screenshot 2024-07-31 at 10.02.39 at night.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/08be76b6-1b69-4965-802d-68b681355b2d/f36b78e2-77a7-4fea-9c6f-b8f0ec5b4f4e/Screenshot_2024-07-31_at_10.02.39_at_night.png)

It also works with screen sharing function as well.

**Static Images**

![Screenshot 2024-07-31 at 10.04.30 at night.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/08be76b6-1b69-4965-802d-68b681355b2d/2b8c925c-764d-4067-a3a6-a3ffd50cb6fb/Screenshot_2024-07-31_at_10.04.30_at_night.png)

Same as with the uploaded picture of him.

### Unregistered People

Now let’s take a look at the picture of me, who has not been registered yet. 

**Before Register**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/08be76b6-1b69-4965-802d-68b681355b2d/70f819e1-5d42-4a2d-8902-3439a20d43e9/Untitled.png)

**After Register**

![Screenshot 2024-07-31 at 10.22.11 at night.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/08be76b6-1b69-4965-802d-68b681355b2d/30928856-54c3-40be-854f-fd04f2adc2c2/Screenshot_2024-07-31_at_10.22.11_at_night.png)

![Screenshot 2024-07-31 at 10.24.07 at night.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/08be76b6-1b69-4965-802d-68b681355b2d/17d52e76-eae6-49c4-8b4d-0f645e3e7658/Screenshot_2024-07-31_at_10.24.07_at_night.png)

### Other Features

Besides registering people, you can also edit the person’s name or image as well as delete the person from the database. 

# References

- EDPS TechDispatch. (2021). EDPS TechDispatch on Facial Emotion Recognition. *EDPS TechDispatch on Facial Emotion Recognition*, *1*.
