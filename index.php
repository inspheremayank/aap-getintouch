<!-- Begin global header section -->
<?php
$pageTitle = 'AAP - get in touch';
include("includes/_global-Head.php");
?>

<!-- End global header section -->

<!-- Begin header section -->

<?php
include("includes/_header.php");
?>
<div class="clearfix"></div>
<div class="getForm__wrapper">
    <div class="container-fluid">
        <div class="row justify-content-between">
            <div class="col-12 col-md-6 col-lg-5 px-0 flex-last">
                <aside class="getForm__wrapper-image">
                    <img src="static/images/laptop-image.png" class="img-fluid" alt="Laptop image" />
                </aside>
            </div>
            <div class="col-12 col-md-6 px-0 flex-first">
                <aside class="getForm__wrapper-form containerFluid-content">
                    <h1 class="title">Get in touch</h1>
                    <p>A member of the team will be in touch to find out how you can best leverage the Small and Regional publishers innovation fund in 2018.</p>
                    <div class="form-fields">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Name" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email address" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Phone number" />
                        </div>
                        <button class="button upper button-radius button-red">let's go</button>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</div>
<div class="clearfix"></div>
<?php
include("includes/_footer.php");
?>
<?php
include("includes/_scripts.php");
?>