var data = {
    "research": [
    {
      img: 'images/c_planning.png',
      title: 'C-Planning: An Automatic Curriculum for Learning Goal-Reaching Tasks',
      authors: 'Tianjun Zhang*, Benjamin Eysenbach*, Ruslan Salakhutdinov, Sergey Levine, Joseph E. Gonzalez',
      text: 'Goal-conditioned RL is useful since it allows users to specify what agents should do without specifying how to get there. But this makes reaching distant goals very challenging. In our recent paper, we use EM to infer how the agent will reach the goal. This results in an automatic curriculum over intermediate waypoints. Our method successfully solves the sequential object manipulation in robotics tasks. ICLR 2022. [<a href="https://arxiv.org/abs/2110.12080">paper</a>]'
    },
    {
        img: 'images/spede.png',
        title: 'A Free Lunch from the Noise',
        authors: 'Tongzheng Ren*, Tianjun Zhang*, Csaba Szepesv ́ari, Bo Dai',
        text: 'Representation learning lies at the heart of the empirical success of deep learning. However, it has not been fully utilized in RL. We propose SPEDE with rigorous theoretical analysis, and demonstrate the practical superior performance over the existingstate-of-the-art empirical algorithms on several benchmarks. In submission. [<a href="https://arxiv.org/abs/2111.11485">paper</a>, <a href="https://sites.google.com/view/spede">code</a>]'
    },
    {
        img: 'images/moo.png',
        title: 'Multi-objective Optimization by Learning Space Partitions',
        authors: 'Yiyang Zhao, Linnan Wang, Kevin Yang, Tianjun Zhang, Tian Guo, Yuandong Tian',
        text: 'In this paper, we proposeLaMOO, a novel multi-objective optimizer that learns a model from observedsamples to partition the search space and then focus on promising regions thatare likely to contain a subset of the Pareto frontier. Empirically, on the HyperVolume (HV) benchmark and Nasbench201, we demonstrate superior performance. ICLR 2022. [<a href="https://arxiv.org/pdf/2110.03173.pdf">paper</a>]'
    },
    {
        img: 'images/bebold.jpeg',
        title: 'BeBold: Exploration Beyond the Boundary of Explored Regions',
        authors: 'Tianjun Zhang, Huazhe Xu, Xiaolong Wang, Yi Wu, Kurt Keutzer, Joseph E. Gonzalez, Yuandong Tian',
        text: 'Exploration has been a core problem in RL and algorithms often fail without manually-designed dense rewards. To encourage exploration, BeBold assigns intrinsic rewards at the boundary states between explored and unexplored regions. It shows great results in sparse-reward environment like MinGrid and Atari games. NeurIPS 2021. [<a href="https://arxiv.org/abs/2012.08621">paper</a>, <a href="https://github.com/tianjunz/NovelD">code</a>]'
    },
    {
        img: 'images/made.jpeg',
        title: 'MADE: Exploration via Maximizing Deviation from Explored Regions',
        authors: 'Tianjun Zhang, Paria Rashidinejad, Jiantao Jiao, Yuandong Tian, Joseph E. Gonzalez, Stuart Russell',
        text: 'We propose a method for path planning based on partitioning a latent space, with design choices based on a theoretical analysis of space partitioning. Empirically, our method substantially outperforms baselines on 2D navigation, compiler optimization, and molecule design. NeurIPS 2021. [<a href="arxiv.org/abs/2106.10544">paper</a>, <a href="https://github.com/yangkevin2/neurips2021-lap3">code</a>]'
    },
    {
        img: 'images/lap3.png',
        title: 'Learning Space Partitions for Path Planning',
        authors: 'Kevin Yang*, Tianjun Zhang*, Chris Cummins, Brandon Cui, Benoit Steiner, Linnan Wang, Joseph E. Gonzalez, Dan Klein, Yuandong Tian',
        text: 'Efficient exploration in RL remains the core problem, especially in sparse-reward environments. We tackle the problem by first reformulating RL into its dual form and then adding a convex regularizer. NeurIPS 2021. [<a href="https://arxiv.org/abs/2106.10268">paper</a>, <a href="https://github.com/tianjunz/MADE">code</a>]'
    },
    ],
    "projects": [
        {
            img: 'images/6882.png',
            title: 'Topic Modeling of Academic Papers at MIT',
            text: 'For Bayesian Modeling (<a href="http://www.tamarabroderick.com/course_6_882.html">6.882</a>), applied LDA to a new dataset of 100,000+ academic papers written by MIT affiliates. [<a href="http://web.mit.edu/bce/www/lda.pdf">paper</a>, <a href="https://github.com/ben-eysenbach/6.882-LDA">code</a>, <a href="https://github.com/ben-eysenbach/6.882-LDA/blob/master/datasets/dspace.tar.gz?raw=true">data</a>]'
        },
        {
            img: 'images/mmbm.png',
            title: 'Presentations on Gaussian Processes and Mixed Membership Block Models',
            text: 'For a seminar on Bayesian Modeling (<a href="http://www.tamarabroderick.com/course_6_882.html">6.882</a>), taught classes on Gaussian Processes and Mixed Membership Block Models. [<a href="https://docs.google.com/presentation/d/1V_rzvHggMqnTNOKzjUvs6EMmaH4qVhYLcRv4CbqHrLI/edit?usp=sharing">GP slides</a>, <a href="https://docs.google.com/presentation/d/1zWM9a_uAeBR_72m4hPkyQOxXoYV_i1FZhfKvE5_5jt8/edit?usp=sharing">MMBM slides</a>]'
        },
        {
            img: 'images/6854_small.jpg',
            title: 'Exact Recovery of Stochastic Block Models',
            text: 'Wrote a survey paper on exact recovery for Advanced Algorithms (<a href="http://people.csail.mit.edu/moitra/854.html">6.854</a>). [<a href="http://web.mit.edu/bce/www/sbm.pdf">paper</a>]'
        },
        {
            img: 'images/dna.png',
            title: 'DNA Compression with Graphical Models',
            text: 'For Algorithms for Inference (6.438), I implemented developed a model for compressing shotgun DNA sequences using LDPC codes. [<a href="http://web.mit.edu/bce/www/6.438_project.pdf">paper</a>, <a href="http://web.mit.edu/bce/www/6.438_project.zip">code</a>]'
        },
        {
            img: 'images/cipher.jpg',
            title: 'Cipher Breaking using MCMC',
            text: 'For Inference and Information (6.437), I implemented a model for breaking substitution ciphers using the Metropolis Hastings algorithm. [<a href="http://web.mit.edu/bce/www/6.437_project.pdf">paper</a>, <a href="http://web.mit.edu/bce/www/6.437_project.zip">code</a>]'
        },
        {
            img: 'images/6856.jpg',
            title: 'Randomized Splay Trees',
            text: 'For Randomized Algorithms (<a href="https://courses.csail.mit.edu/6.856/current/">6.856</a>), implemented and analyzed randomized splay trees. Collaborated with Robi Bhattacharjee. [<a href="http://web.mit.edu/bce/www/6856_paper.pdf">paper</a>, <a href="http://web.mit.edu/bce/www/6856_code.zip">code</a>]'
        },
        {
            img: 'images/6819.png',
            title: 'Visualizing 3D Reconstruction',
            text: 'For Computer Vision (<a href="http://6.869.csail.mit.edu/fa14/">6.819</a>), used an Oculus Rift to visualize algorithms which reconstruct a 3D scene from images. Collaborated with <a href="https://github.com/andrewmo2014">Andrew Moran</a>. [<a href="http://web.mit.edu/bce/www/6819_paper.pdf">paper</a>, <a href="http://web.mit.edu/bce/www/6819_slides.pdf">slides</a>, <a href="http://web.mit.edu/bce/www/6819_video.mov">video</a>]'
        },
        {
            img: 'images/hubway_small.jpg',
            title: 'Biking in Boston',
            text: 'Warped maps to reflect distances according to cyclists. Part of a data visualization project on how Hubway for Applying Media Technologies (CMS.622). [<a href="http://people.csail.mit.edu/bce/hubway">site</a>, <a href="http://web.mit.edu/bce/www/cms622_hubway.html">code</a>]'
        }],
    "teaching": [
       {
           img: 'images/rl.jpg',
           title: '<a href="https://cmudeeprl.github.io/703website/">10-703: Deep Reinforcement Learning</a>',
           text: 'Head TA in Fall 2019, Fall 2020.',
       },
     
       {
           img: 'images/stockholm.jpg',
           title: 'Exploration in Reinforcement Learning: Workshop @ ICML 2018, ICML 2019',
           text: '<a href="https://github.com/suryabhupa">Surya Bhupatiraju</a> and I co-organized a workshop on Exploration in Reinforcement Learning at <a href=""https://icml.cc/">ICML 2018 and ICML 2019</a>.',
       },
       {
            img: 'images/6008.jpg',
            title: '<a href="http://web.mit.edu/6.008/www/">6.008: Introduction to Inference</a>',
            text: 'TA in Fall 2016'
        },
        {
            img: 'images/6042.jpg',
            title: '<a href="http://mit.edu/6.042/">6.042: Math for Computer Science</a>',
            text: 'TA in Spring 2015'
        }],
    "blog": [
       {
           img: 'images/stockholm.jpg',
           title: '<a href="https://medium.com/@erl.leads/hitchhikers-guide-to-organizing-an-academic-workshop-cc9a5b1c32c9">Hitchhiker\'s Guide to Organizing an Academic Workshop</a>',
           text: 'Surya Bhupatiraju and I discuss what went well at our Workshop on Exploration in RL, and what we learned.'
       },
       {
           img: 'images/residency.jpg',
           title: '<a href="https://colinraffel.com/blog/writing-a-google-ai-residency-cover-letter.html">Writing a Google AI Residency Cover Letter</a>',
           text: 'Katherine Lee and I explain how to write a cover letter for AI residency programs.'
        }],
    "news": [
    ],
}

$('document').ready(function() {

    // Add teaching
    for (var i = 0; i < data.teaching.length; i++) {
        var proj = data.teaching[i];
        var html = getProjectHTML(proj);
        $('table#teaching-table').append(html);
    }


    // Add research
    for (var i = 0; i < data.research.length; i++) {
        var proj = data.research[i];
        var html = getProjectHTML(proj);
        $('table#research-table').append(html);
    }

    // Add blog
    for (var i = 0; i < data.blog.length; i++) {
        var proj = data.blog[i];
        var html = getProjectHTML(proj);
        $('table#blog-table').append(html);
    }

});


function getProjectHTML(proj) {
    var html = '<tr>';
    // Add image
    html += '<td class="image-td"><img class="project-img" src="' + proj.img + '"></td>';
    // Add title and description
    html += '<td class="description-td"><p style="margin: 20px 0px 0px 0px;"><em>' + '<b>' + proj.title + '</b>' + '</em>. '
    if ('authors' in proj) {
        html += '<br> ' + '<small>' + proj.authors + '</small>';
    }
    html += '<br> <p style="margin: 5px 0px">' + proj.text + ' </p> </p></td>';
    html += '</tr>';
    return html;
}
