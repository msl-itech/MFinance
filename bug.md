✘ [ERROR] TS-996007: The Component 'AlerteTresorerieComponent' is declared by more than one NgModule. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/alerte-tresorerie.component.ts:15:13:
      15 │ export class AlerteTresorerieComponent implements OnInit, OnDestroy {
         ╵              ~~~~~~~~~~~~~~~~~~~~~~~~~

  'AlerteTresorerieComponent' is listed in the declarations of the NgModule 'TresorireModule'.

    src/app/TresorerieModule/tresorire/tresorire.module.ts:40:4:
      40 │     AlerteTresorerieComponent,
         ╵     ~~~~~~~~~~~~~~~~~~~~~~~~~

  'AlerteTresorerieComponent' is listed in the declarations of the NgModule 'AppModule'.

    src/app/app.module.ts:93:4:
      93 │     AlerteTresorerieComponent,
         ╵     ~~~~~~~~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS2739: Type '{ level: string; minScore: number; maxScore: number; badge: string; title: string; description: string; recommendation: string; ctaText: string; ctaAction: string; }[]' is missing the following properties from type '{ low: { min: number; max: number; title: string; badge: string; }; medium: { min: number; max: number; title: string; badge: string; }; high: { min: number; max: number; title: string; badge: string; }; }': low, medium, high [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:188:4:
      188 │     levels: [
          ╵     ~~~~~~

  The expected type comes from property 'levels' which is declared here on type 'DiagnosticScoringRules'

    src/app/shared/diagnostic/diagnostic.models.ts:55:2:
      55 │   levels: {
         ╵   ~~~~~~

✘ [ERROR] TS4111: Property 'marge_brute' comes from an index signature, so it must be accessed with ['marge_brute']. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:332:40:
      332 │ ...ion: (answers) => answers.marge_brute === 'faible' && answers....
          ╵                              ~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'couverture_charges' comes from an index signature, so it must be accessed with ['couverture_charges']. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:332:76:
      332 │ ...rge_brute === 'faible' && answers.couverture_charges === 'court',
          ╵                                      ~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS2353: Object literal may only specify known properties, and 'emoji' does not exist in type 'DiagnosticCrossCondition'. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:333:8:
      333 │         emoji: '🚨',
          ╵         ~~~~~

✘ [ERROR] TS4111: Property 'simulation_prix' comes from an index signature, so it must be accessed with ['simulation_prix']. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:338:40:
      338 │ ...n: (answers) => answers.simulation_prix === 'non' && answers.p...
          ╵                            ~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'plan_action' comes from an index signature, so it must be accessed with ['plan_action']. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:338:77:
      338 │ ...swers.simulation_prix === 'non' && answers.plan_action === 'non',
          ╵                                               ~~~~~~~~~~~

✘ [ERROR] TS2353: Object literal may only specify known properties, and 'emoji' does not exist in type 'DiagnosticCrossCondition'. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:339:8:
      339 │         emoji: '⚠️',
          ╵         ~~~~~

✘ [ERROR] TS4111: Property 'critere_client' comes from an index signature, so it must be accessed with ['critere_client']. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:344:40:
      344 │ ...n: (answers) => answers.critere_client === 'prix' && answers.m...
          ╵                            ~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'marge_brute' comes from an index signature, so it must be accessed with ['marge_brute']. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:344:77:
      344 │ ...rs.critere_client === 'prix' && answers.marge_brute === 'faible',
          ╵                                            ~~~~~~~~~~~

✘ [ERROR] TS2353: Object literal may only specify known properties, and 'emoji' does not exist in type 'DiagnosticCrossCondition'. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:345:8:
      345 │         emoji: '💥',
          ╵         ~~~~~

✘ [ERROR] TS4111: Property 'marge_brute' comes from an index signature, so it must be accessed with ['marge_brute']. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:350:40:
      350 │ ...ion: (answers) => answers.marge_brute === 'elevee' && answers....
          ╵                              ~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'couverture_charges' comes from an index signature, so it must be accessed with ['couverture_charges']. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:350:76:
      350 │ ...= 'elevee' && answers.couverture_charges === 'long' && answers...
          ╵                          ~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'plan_action' comes from an index signature, so it must be accessed with ['plan_action']. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:350:117:
      350 │ ...erture_charges === 'long' && answers.plan_action === 'structure',
          ╵                                         ~~~~~~~~~~~

✘ [ERROR] TS2353: Object literal may only specify known properties, and 'emoji' does not exist in type 'DiagnosticCrossCondition'. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:351:8:
      351 │         emoji: '🛡️',
          ╵         ~~~~~

✘ [ERROR] TS4111: Property 'serenite' comes from an index signature, so it must be accessed with ['serenite']. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:356:40:
      356 │ ...tion: (answers) => answers.serenite === 'inquiet' && (answers....
          ╵                               ~~~~~~~~

✘ [ERROR] TS4111: Property 'marge_brute' comes from an index signature, so it must be accessed with ['marge_brute']. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:356:75:
      356 │ ...=== 'inquiet' && (answers.marge_brute === 'moyenne' || answers...
          ╵                              ~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'marge_brute' comes from an index signature, so it must be accessed with ['marge_brute']. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:356:112:
      356 │ ...s.marge_brute === 'moyenne' || answers.marge_brute === 'elevee'),
          ╵                                           ~~~~~~~~~~~

✘ [ERROR] TS2353: Object literal may only specify known properties, and 'emoji' does not exist in type 'DiagnosticCrossCondition'. [plugin angular-compiler]

    src/app/TresorerieModule/alerte-tresorerie/diagnostic-resistance.config.ts:357:8:
      357 │         emoji: '🤔',
          ╵         ~~~~~

✘ [ERROR] TS2739: Type '{ level: string; minScore: number; maxScore: number; badge: string; title: string; description: string; recommendation: string; ctaText: string; ctaAction: string; }[]' is missing the following properties from type '{ low: { min: number; max: number; title: string; badge: string; }; medium: { min: number; max: number; title: string; badge: string; }; high: { min: number; max: number; title: string; badge: string; }; }': low, medium, high [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:188:4:
      188 │     levels: [
          ╵     ~~~~~~

  The expected type comes from property 'levels' which is declared here on type 'DiagnosticScoringRules'

    src/app/shared/diagnostic/diagnostic.models.ts:55:2:
      55 │   levels: {
         ╵   ~~~~~~

✘ [ERROR] TS4111: Property 'taux_reachat' comes from an index signature, so it must be accessed with ['taux_reachat']. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:332:40:
      332 │ ...on: (answers) => answers.taux_reachat === 'faible' && answers....
          ╵                             ~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'systeme_fidelisation' comes from an index signature, so it must be accessed with ['systeme_fidelisation']. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:332:77:
      332 │ ...reachat === 'faible' && answers.systeme_fidelisation === 'aucun',
          ╵                                    ~~~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS2353: Object literal may only specify known properties, and 'emoji' does not exist in type 'DiagnosticCrossCondition'. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:333:8:
      333 │         emoji: '🚨',
          ╵         ~~~~~

✘ [ERROR] TS4111: Property 'taux_reachat' comes from an index signature, so it must be accessed with ['taux_reachat']. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:338:40:
      338 │ ...on: (answers) => answers.taux_reachat === 'faible' && answers....
          ╵                             ~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'differenciation' comes from an index signature, so it must be accessed with ['differenciation']. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:338:77:
      338 │ ....taux_reachat === 'faible' && answers.differenciation === 'prix',
          ╵                                          ~~~~~~~~~~~~~~~

✘ [ERROR] TS2353: Object literal may only specify known properties, and 'emoji' does not exist in type 'DiagnosticCrossCondition'. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:339:8:
      339 │         emoji: '💥',
          ╵         ~~~~~

✘ [ERROR] TS4111: Property 'connaissance_clients' comes from an index signature, so it must be accessed with ['connaissance_clients']. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:344:40:
      344 │ ...(answers) => answers.connaissance_clients === 'approfondie' &&...
          ╵                         ~~~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'communication_reguliere' comes from an index signature, so it must be accessed with ['communication_reguliere']. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:344:90:
      344 │ ...profondie' && answers.communication_reguliere === 'systematique',
          ╵                          ~~~~~~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS2353: Object literal may only specify known properties, and 'emoji' does not exist in type 'DiagnosticCrossCondition'. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:345:8:
      345 │         emoji: '🏆',
          ╵         ~~~~~

✘ [ERROR] TS4111: Property 'systeme_fidelisation' comes from an index signature, so it must be accessed with ['systeme_fidelisation']. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:350:40:
      350 │ ...(answers) => answers.systeme_fidelisation === 'structure' && a...
          ╵                         ~~~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'taux_reachat' comes from an index signature, so it must be accessed with ['taux_reachat']. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:350:88:
      350 │ ...fidelisation === 'structure' && answers.taux_reachat === 'eleve',
          ╵                                            ~~~~~~~~~~~~

✘ [ERROR] TS2353: Object literal may only specify known properties, and 'emoji' does not exist in type 'DiagnosticCrossCondition'. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:351:8:
      351 │         emoji: '✨',
          ╵         ~~~~~

✘ [ERROR] TS4111: Property 'reaction_depart' comes from an index signature, so it must be accessed with ['reaction_depart']. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:356:40:
      356 │ ...n: (answers) => answers.reaction_depart === 'aucune' && answer...
          ╵                            ~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'communication_reguliere' comes from an index signature, so it must be accessed with ['communication_reguliere']. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:356:80:
      356 │ ...art === 'aucune' && answers.communication_reguliere === 'jamais',
          ╵                                ~~~~~~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS2353: Object literal may only specify known properties, and 'emoji' does not exist in type 'DiagnosticCrossCondition'. [plugin angular-compiler]

    src/app/TresorerieModule/proteger-tresorerie/diagnostic-fidelisation.config.ts:357:8:
      357 │         emoji: '⚠️',
          ╵         ~~~~~

✘ [ERROR] TS4111: Property 'croissance_ca' comes from an index signature, so it must be accessed with ['croissance_ca']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:245:18:
      245 │           answers.croissance_ca === 'croissance' && answers.table...
          ╵                   ~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'tableau_previsionnel' comes from an index signature, so it must be accessed with ['tableau_previsionnel']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:245:60:
      245 │ ...ce_ca === 'croissance' && answers.tableau_previsionnel === 'non',
          ╵                                      ~~~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'croissance_ca' comes from an index signature, so it must be accessed with ['croissance_ca']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:250:18:
      250 │           answers.croissance_ca === 'croissance' && answers.retar...
          ╵                   ~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'retards_clients' comes from an index signature, so it must be accessed with ['retards_clients']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:250:60:
      250 │ ...e_ca === 'croissance' && answers.retards_clients === 'frequents',
          ╵                                     ~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'tresorerie_actuelle' comes from an index signature, so it must be accessed with ['tresorerie_actuelle']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:255:18:
      255 │           answers.tresorerie_actuelle === 'tendue' && answers.str...
          ╵                   ~~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'stress_financier' comes from an index signature, so it must be accessed with ['stress_financier']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:255:62:
      255 │ ...ie_actuelle === 'tendue' && answers.stress_financier === 'eleve',
          ╵                                        ~~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'tresorerie_actuelle' comes from an index signature, so it must be accessed with ['tresorerie_actuelle']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:260:18:
      260 │           answers.tresorerie_actuelle === 'confortable' && answer...
          ╵                   ~~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'priorite' comes from an index signature, so it must be accessed with ['priorite']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:260:67:
      260 │ ...ie_actuelle === 'confortable' && answers.priorite === 'investir',
          ╵                                             ~~~~~~~~

✘ [ERROR] TS4111: Property 'tableau_previsionnel' comes from an index signature, so it must be accessed with ['tableau_previsionnel']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:265:18:
      265 │           answers.tableau_previsionnel === 'avance' && answers.st...
          ╵                   ~~~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'stress_financier' comes from an index signature, so it must be accessed with ['stress_financier']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:265:63:
      265 │ ...evisionnel === 'avance' && answers.stress_financier === 'faible',
          ╵                                       ~~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'croissance_ca' comes from an index signature, so it must be accessed with ['croissance_ca']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:276:16:
      276 │         answers.croissance_ca === 'croissance' &&
          ╵                 ~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'priorite' comes from an index signature, so it must be accessed with ['priorite']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:277:16:
      277 │         answers.priorite === 'investir' &&
          ╵                 ~~~~~~~~

✘ [ERROR] TS4111: Property 'tresorerie_actuelle' comes from an index signature, so it must be accessed with ['tresorerie_actuelle']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:278:16:
      278 │         answers.tresorerie_actuelle !== 'tendue',
          ╵                 ~~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'tresorerie_actuelle' comes from an index signature, so it must be accessed with ['tresorerie_actuelle']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:288:16:
      288 │         answers.tresorerie_actuelle === 'tendue' &&
          ╵                 ~~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'stress_financier' comes from an index signature, so it must be accessed with ['stress_financier']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:289:16:
      289 │         answers.stress_financier === 'eleve' &&
          ╵                 ~~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'retards_clients' comes from an index signature, so it must be accessed with ['retards_clients']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:290:16:
      290 │         answers.retards_clients === 'frequents',
          ╵                 ~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'tresorerie_actuelle' comes from an index signature, so it must be accessed with ['tresorerie_actuelle']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:300:16:
      300 │         answers.tresorerie_actuelle === 'confortable' &&
          ╵                 ~~~~~~~~~~~~~~~~~~~

✘ [ERROR] TS4111: Property 'priorite' comes from an index signature, so it must be accessed with ['priorite']. [plugin angular-compiler]

    src/app/TresorerieModule/tresorerie-page/diagnostic-hub.config.ts:301:16:
      301 │         answers.priorite === 'investir' &&
          ╵                 ~~~~~~~~

✘ [ERROR] NG2: Object is possibly 'undefined'. [plugin angular-compiler]

    src/app/shared/diagnostic/diagnostic-result.component.html:22:59:
      22 │ ...`<p class="profile-name">`{{ result.detailedAnalysis.profile }}`</p>`
         ╵                                                        ~~~~~~~

  Error occurs in the template of component DiagnosticResultComponent.

    src/app/shared/diagnostic/diagnostic-result.component.ts:10:15:
      10 │   templateUrl: './diagnostic-result.component.html',
         ╵                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

✘ [ERROR] NG2: Object is possibly 'undefined'. [plugin angular-compiler]

    src/app/shared/diagnostic/diagnostic-result.component.html:54:38:
      54 │`<p>`{{ result.detailedAnalysis.crossAnalysis }}`</p>`
         ╵                                       ~~~~~~~~~~~~~

  Error occurs in the template of component DiagnosticResultComponent.

    src/app/shared/diagnostic/diagnostic-result.component.ts:10:15:
      10 │   templateUrl: './diagnostic-result.component.html',
         ╵                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Watch mode enabled. Watching for file changes...
