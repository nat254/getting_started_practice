import React from 'react';
import Heading from './Heading';
import Section from './Section';

export default function ProfilePage(){
    return (
        <Section>
            <Heading>My Profile</Heading>
            <Post
                title = "Hello Reader"
                body = "Read about my life"
            />
            <AllPosts />
        </Section>
    );
};

function AllPosts() {
    return (
        <Section>
            <Heading>Posts</Heading>
            <RecentPosts />
        </Section>
    );
};

function RecentPosts() {
    return (
        <Section>
            <Heading>Recent Posts</Heading>
            <Post
                title = "My First Entry"
                body = "My life is great"
            />
            <Post
                title = "My Second Entry"
                body = "Ooops, I made a mistake"
            />
        </Section>
    );
};

function Post({title, body}: {title: string, body: string}){
    return (
        <Section>
            <Heading>{title}</Heading>
            <p><i>{body}</i></p>
        </Section>
    )
}
