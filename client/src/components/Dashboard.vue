<template>
<div class="chop">
  <nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li>
      <a href="#">
        <span class="icon is-small">
        <i class="fas fa-user-friends"></i>
        </span>
        <span>Friends List</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="icon is-small">
         <i class="fas fa-search"></i>
        </span>
        <span>Search Friends</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-users"></i>
        </span>
        <span>Requests</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-envelope"></i>
        </span>
        <span>Messages</span>
      </a>
    </li>
     <li>
      <a href="/">
        <span class="icon is-small">
          <i class="fas fa-door-open"></i>
        </span>
        <span>Logout</span>
      </a>
    </li>
  </ul>
</nav>
  <div class="columns">
  <div class="column">
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="../assets/dash.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="../assets/pic.jpg" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Sai Harika Tadi</p>
        <p class="subtitle is-6">@tadis1</p>
      </div>
    </div>

    <div class="content"> All progress takes place outside the comfort zone.<br>
     “If you think lifting is dangerous, try being weak. Being weak is too dangerous.”<br>
       <a>@fitnesstracker</a>.
      <a href="#">#workout</a> <a href="#">#be_strong</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>



  </div>
  <div class="column">
<div class="field">
  <label class="label">Name Your Workout</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">Tainer Name</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="Venu Naredla">
    <span class="icon is-small is-left">
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label">Trainer Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="xxxxxx@newpaltz.edu">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field">
  <label class="label">Workout Course</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>Cardio</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

</div>
<div class="column">

  <div class="field">
  <label class="label">First Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>

  <div class="field">
  <label class="label">Last Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>



<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="xxxxxx@hawkmail.newpaltz.edu">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field">
  <label class="label">Workout</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select Workout Types</option>
        <option>Warm up</option>
        <option>Cycling</option>
        <option>Push ups</option>
        <option>Knee pushups</option>
        <option>Weight Lifting</option>
        <option>Plank</option>
      </select>
    </div>
  </div>
</div>
<div class="field">
  <label class="label">Workout Time</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select Workout Time</option>
        <option>5 min</option>
        <option>10 min</option>
        <option>15 min</option>
        <option>30 min</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>


<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
  </div>
  </div>


  </div>
</template>
<style>
template{
  background-color: black;
}
.Dashboard{
  background-color: aqua;
}
.chop{
  background-color: rgb(255, 255, 255);
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom:5% ;
}
span{
  color: black;
}
</style>