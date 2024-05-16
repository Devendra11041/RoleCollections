sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/app/fiorielements/test/integration/FirstJourney',
		'com/app/fiorielements/test/integration/pages/EmployeeList',
		'com/app/fiorielements/test/integration/pages/EmployeeObjectPage',
		'com/app/fiorielements/test/integration/pages/AddressObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeeList, EmployeeObjectPage, AddressObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/app/fiorielements') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeeList: EmployeeList,
					onTheEmployeeObjectPage: EmployeeObjectPage,
					onTheAddressObjectPage: AddressObjectPage
                }
            },
            opaJourney.run
        );
    }
);