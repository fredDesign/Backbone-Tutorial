/************BAckbone*************/
(function ($,mb) {
    /*--- initialisation de la webapp ---*/
    var contactsBDD;

    var contactModel = Backbone.Model.extend(
        { default:
        {
            id:'',
            Nom:'',
            prenom:''
        }
        }
    );

    var contactCollectionModel = Backbone.Collection.extend (
        {
            url:"bdd/contactList.js",
            model:contactModel
        }
    );





    $(function () {
        var main = function () {

            //contacts list
            contactsBDD = new contactCollectionModel();

            var contactListView = new mb.views.ContactListView ({el:"#contact-list",collection:contactsBDD});
            contactsBDD.fetch(
                {
                success : function (){
                     $("#contact-list h1").remove();
                    //manque le change add item
                     }
                }
            )




        };



        $("#contact-list").append("<li><h1>En attente</h1></li>");

        setTimeout(main,1000)
        ;

    })
})
    (jQuery,mb);