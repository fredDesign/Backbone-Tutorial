/************BAckbone*************/
var mb= mb || {};
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

    var contactCollection = Backbone.Collection.extend (
        {
            url:"bdd/contactList.js",
            model:contactModel
        }
    );

    /*--- initialisation de la webapp ---*/
    mb.router=mb.router || {};

    var contactsBDD;

    mb.router.AppRouter =Backbone.Router.extend(

        {
            routes:
            {
                 "":"mainInit",
                "contact/:id" : "changeContact"
            },
            mainInit: function ()
            {
                $("changContact").hide();
                $("contact_list").show();
                ///initialisation unisque des donnnées

                if (!contactCollection)
                {
                    contactCollection = new mb.models.ContactsCollection();

                    //Renseigne la liste
                    var contactListView = new mb.ContactListView ({ el:"#contact_list", collection:contactCollection});

                //rappatriement des données de serveur

                contactsCollection.fetch (
                    {
                        success : function (){
                            // annule le chargement
                            $("#contact-list h1").remove();
                        }
                    }
                    )
                }
            },
            changeContact : function (id){
                $('#contact_list').hide();
                $('#changeContact').show();

                var self = this
                    ,model =contactsCollection.get('id')
                    ,prenom=model.get("prenom")
                    ,nom=model.get("Nom");
               $("#contactPrenom").val(prenom);
               $("#contactNom").val(prenom);
               $("#contactChangeButton").click(
                   function(){
                       var newPrenom = $(  $("#contactPrenom").val()) ;
                       var newNom = $(  $("#contactNom").val()) ;
                       if (newPrenom !== prenom || newNom !== nom){
                           model.set
                               ({
                                   prenom:newPrenom,
                                   nom:NewPrenom
                               })
                       }
                       self.navigate('',{trigger:true}) ;
                   }
               );


             }
        }
    ) ;

     var appRouter = new mb.router.AppRouter();
    Backbone.history.start();

/*    var contactModel = Backbone.Model.extend(
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
    );*/





/*    $(function () {
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

    })*/
})
    (jQuery,mb);