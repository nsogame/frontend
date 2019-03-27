<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">About</h1>
                <p>Connecting to our servers is easy as 1-2-3:</p>
                <ol>
                    <li>
                        <p><b>Install our certificate authority.</b> Since we're spoofing osu.ppy.sh, we need you to explicitly trust us to serve data from osu.ppy.sh. You can find out how to install these certificates by Googling your operating system along with the terms <code>install root certificate authority</code>. This probably requires administrator privileges, but don't worry, this isn't running any code.</p>
                        <p><a href="https://nso.iptq.io/files/nso.pem" class="button is-primary">Download Root CA Certificate</a></p>
                    </li>
                    <li>
                        <p><b>Override your computer's host lookup to point <code>osu.ppy.sh</code> to our servers.</b> This is the most important part! If you don't do this, your computer will use the automatic DNS mechanism to resolve the regular server again.</p>
                        <p>For the time being, there's no switcher tool yet, so you'll have to change your host file yourself (<a href="https://www.howtogeek.com/howto/27350/beginner-geek-how-to-edit-your-hosts-file/" target="_blank">this link</a> is a good resource) This is usually pretty simple, but like the previous step, also requires administrator privileges. You'll want to add a line that looks something like this:</p>
                        <p><code>198.199.83.106 osu.ppy.sh c.ppy.sh c1.ppy.sh c2.ppy.sh c3.ppy.sh c4.ppy.sh c5.ppy.sh c6.ppy.sh c7.ppy.sh a.ppy.sh i.ppy.sh</code></p>
                        <p>This just tells your computer to use our IP for all of those listed domains and not to perform automatic DNS lookup.</p>
                    </li>
                    <li>
                        <p><b>Profit?</b> Your osu! client should now connect to our servers. Like the official servers, you'll need to have an account registered before you can sign in from the client, so if you haven't done that, you can <router-link :to="{name: 'users/register'}">click here</router-link> to do that.</p>
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    p {
        margin-bottom: 1em;
    }
</style>
